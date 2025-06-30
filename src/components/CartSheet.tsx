
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface CartSheetProps {
  children: React.ReactNode;
  onContinueShopping?: () => void;
}

const CartSheet = ({ children, onContinueShopping }: CartSheetProps) => {
  const { cartItems, cartCount, updateCartItem, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const total = cartItems.reduce((sum, item) => sum + (item.products.price * item.quantity), 0);

  const handleContinueShopping = () => {
    setIsOpen(false);
    
    //home page
    navigate('/');
    
    // add delay
    setTimeout(() => {
      window.dispatchEvent(new Event('resetCategoryFilter'));
    }, 100);
    
    // optional callback
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  if (!user) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          {children}
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
          <SheetHeader>
            <SheetTitle className="text-gray-900 dark:text-white">Shopping Cart</SheetTitle>
            <SheetDescription className="text-gray-600 dark:text-gray-400">
              Please sign in to view your cart
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
        <SheetHeader>
          <SheetTitle className="text-gray-900 dark:text-white">Shopping Cart ({cartCount})</SheetTitle>
          <SheetDescription className="text-gray-600 dark:text-gray-400">
            Your selected items
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
              <ShoppingCart className="h-16 w-16 mb-4 animate-bounce-subtle" />
              <p className="mb-4">Your cart is empty</p>
              <Button onClick={handleContinueShopping} variant="outline" className="animate-fade-in hover:scale-105 transition-all duration-200">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex items-center space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4 animate-slide-up transform hover:scale-[1.02] transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-16 w-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    {item.products.image_url ? (
                      <img 
                        src={item.products.image_url} 
                        alt={item.products.name}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-2xl">📦</span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">{item.products.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">${item.products.price.toFixed(2)}</p>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 hover:scale-110 transition-transform duration-200"
                        onClick={() => updateCartItem(item.product_id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center text-sm text-gray-900 dark:text-white font-medium">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 hover:scale-110 transition-transform duration-200"
                        onClick={() => updateCartItem(item.product_id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-200"
                        onClick={() => removeFromCart(item.product_id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4 animate-fade-in">
                <Button 
                  onClick={handleContinueShopping} 
                  variant="outline" 
                  className="w-full hover:scale-105 transition-transform duration-200"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
                
                <div className="flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white">
                  <span>Total: ${total.toFixed(2)}</span>
                </div>
                
                <Button className="w-full gradient-primary hover:scale-105 transition-transform duration-200" size="lg">
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
