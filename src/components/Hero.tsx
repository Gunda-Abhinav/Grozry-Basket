
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[500px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-accent-green animate-bounce-subtle"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-accent-peach animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 rounded-full bg-primary animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent-green/20 text-accent-green rounded-full text-sm font-medium mb-4">
                🚚 Free Delivery Available
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Fresh Groceries
                <span className="block text-primary">Delivered Fast</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Get the freshest vegetables, fruits, and pantry essentials delivered to your doorstep 
              in under 30 minutes. Quality guaranteed!
            </p>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-accent-green/20 rounded-full">
                  <Clock className="h-4 w-4 text-accent-green" />
                </div>
                <span className="text-sm font-medium">30-min delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-accent-green/20 rounded-full">
                  <CheckCircle className="h-4 w-4 text-accent-green" />
                </div>
                <span className="text-sm font-medium">Fresh guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="gradient-primary hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                View Categories
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main hero image */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-accent-peach/30 to-accent-green/30 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">🛒</div>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Fresh Groceries
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Coming to your door
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass p-4 rounded-xl animate-bounce-subtle">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🥬</span>
                  <div>
                    <p className="font-semibold text-sm">Fresh Vegetables</p>
                    <p className="text-xs text-muted-foreground">Farm to table</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass p-4 rounded-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🍎</span>
                  <div>
                    <p className="font-semibold text-sm">Fresh Fruits</p>
                    <p className="text-xs text-muted-foreground">Hand-picked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
