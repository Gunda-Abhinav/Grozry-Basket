
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User, Moon, Sun, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import CartSheet from './CartSheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const { user, signOut } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleContactClick = () => {
    if (window.location.pathname === '/about') {
      const section = document.getElementById('meet-our-team');
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/about#meet-our-team');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleContinueShopping = () => {
    navigate('/');
    // Reset any category filters
    window.dispatchEvent(new CustomEvent('resetCategoryFilter'));
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '#contact', onClick: handleContactClick }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200">
            <div className="gradient-primary p-2 rounded-lg animate-bounce-subtle">
              <span className="text-white text-xl">🛒</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Grozry Basket
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.onClick ? (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-burgundy transition-all font-medium hover:scale-105 duration-200"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-burgundy transition-all font-medium hover:scale-105 duration-200"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search for groceries..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:shadow-md focus:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden md:flex hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </Button>

            {/* Cart */}
            <CartSheet onContinueShopping={handleContinueShopping}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium min-w-[20px]">
                    {cartCount}
                  </span>
                )}
              </Button>
            </CartSheet>

            {/* Account */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl z-50 animate-scale-in"
                >
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center"
                onClick={() => navigate('/auth')}
              >
                <User className="h-5 w-5" />
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative animate-fade-in">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for groceries..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
                />
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link, index) => (
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      link.onClick();
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-burgundy transition-colors font-medium py-2 text-left animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent-burgundy transition-colors font-medium py-2 animate-fade-in"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </Link>
                )
              ))}

              {/* Mobile Auth Button */}
              {!user && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    navigate('/auth');
                    setIsMenuOpen(false);
                  }}
                  className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: '0.3s' }}
                >
                  <User className="h-5 w-5 mr-2" />
                  Sign In / Sign Up
                </Button>
              )}

              {/* Mobile Dark Mode Toggle */}
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2 text-gray-600" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
