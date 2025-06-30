
import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="group bg-card rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-accent-peach/20 to-accent-green/20">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-accent-green font-medium mb-1">
          {product.category}
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              /{product.unit}
            </span>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        {product.inStock && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <span className="px-3 py-1 font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="flex-1 gradient-primary hover:opacity-90 transition-all hover:scale-105"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        )}

        {!product.inStock && (
          <Button disabled variant="secondary" className="w-full" size="sm">
            Out of Stock
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
