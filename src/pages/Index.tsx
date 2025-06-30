
import React, { useState, useMemo, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import CategoryFilter from '@/components/CategoryFilter';
import ProductsGrid from '@/components/ProductsGrid';
import PromotionalBanner from '@/components/PromotionalBanner';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

interface Category {
  id: string;
  name: string;
  description: string | null;
}

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category_id: string | null;
  image_url: string | null;
  stock_quantity: number;
  is_active: boolean;
}

// Helper function to get category icons - moved before component
const getCategoryIcon = (categoryName: string) => {
  const iconMap: { [key: string]: string } = {
    'Fruits & Vegetables': '🥬',
    'Dairy & Eggs': '🥛',
    'Meat & Seafood': '🥩',
    'Bakery': '🍞',
    'Pantry': '🥫',
    'Beverages': '🥤',
    'Snacks': '🍿',
    'Frozen Foods': '🧊',
  };
  return iconMap[categoryName] || '📦';
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();

  // Listen for category filter reset
  useEffect(() => {
    const handleResetCategoryFilter = () => {
      setSelectedCategory(null);
    };

    window.addEventListener('resetCategoryFilter', handleResetCategoryFilter);
    return () => {
      window.removeEventListener('resetCategoryFilter', handleResetCategoryFilter);
    };
  }, []);

  // Fetch categories
  const { data: categories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data as Category[];
    },
  });

  // Fetch products
  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('name');
      
      if (error) throw error;
      return data as Product[];
    },
  });

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(product => product.category_id === selectedCategory);
  }, [products, selectedCategory]);

  const handleAddToCart = async (product: any) => {
    await addToCart(product.id);
  };

  // Transform data to match existing component interfaces with correct counts
  const transformedCategories = useMemo(() => {
    return categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: getCategoryIcon(cat.name),
      count: products.filter(p => p.category_id === cat.id && p.stock_quantity > 0).length
    }));
  }, [categories, products]);

  const transformedProducts = filteredProducts.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image_url || '/placeholder.svg',
    category: categories.find(cat => cat.id === product.category_id)?.name || 'Other',
    description: product.description || '',
    stock: product.stock_quantity,
    rating: 4.5, // Default rating for now
    reviews: Math.floor(Math.random() * 100) + 10, // Random reviews for now
    inStock: product.stock_quantity > 0,
    unit: 'each', // Default unit
    originalPrice: product.price + 1, // Mock original price for discount display
    discount: 10 // Mock discount percentage
  }));

  const isLoading = categoriesLoading || productsLoading;

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Fresh Groceries Delivered
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Shop from our wide selection of fresh produce, dairy, meat, and pantry essentials. 
            Get everything delivered to your doorstep.
          </p>
        </div>

        {/* Category Filter */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CategoryFilter
            categories={transformedCategories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <ProductsGrid
              products={transformedProducts}
              selectedCategory={selectedCategory}
              categories={transformedCategories}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}

        {/* Promotional Banner */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <PromotionalBanner />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
