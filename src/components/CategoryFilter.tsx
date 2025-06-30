
import React from 'react';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Shop by Category
      </h2>
      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => onCategorySelect(null)}
          className={`rounded-full transition-all hover:scale-105 ${
            selectedCategory === null 
              ? 'gradient-primary text-white shadow-lg' 
              : 'hover:bg-accent-green/10 hover:border-accent-green'
          }`}
        >
          All Products
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategorySelect(category.id)}
            className={`rounded-full transition-all hover:scale-105 ${
              selectedCategory === category.id 
                ? 'gradient-primary text-white shadow-lg' 
                : 'hover:bg-accent-green/10 hover:border-accent-green'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
            <span className="ml-2 bg-white/20 text-xs px-2 py-0.5 rounded-full">
              {category.count}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
