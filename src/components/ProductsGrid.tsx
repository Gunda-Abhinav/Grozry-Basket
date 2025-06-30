
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  discount?: number;
  inStock: boolean;
  unit: string;
  quantity?: number;
}

interface ProductsGridProps {
  products: Product[];
  selectedCategory: string | null;
  categories: Array<{ id: string; name: string; icon: string; count: number }>;
  onAddToCart: (product: Product) => void;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  selectedCategory,
  categories,
  onAddToCart
}) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {selectedCategory 
            ? `${categories.find(c => c.id === selectedCategory)?.name} Products`
            : 'All Products'
          }
        </h2>
        <p className="text-muted-foreground">
          {products.length} products found
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground">
            Try selecting a different category or check back later.
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductsGrid;
