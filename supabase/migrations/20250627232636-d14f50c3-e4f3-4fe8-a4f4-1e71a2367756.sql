
-- Add more products with stock to make the store more realistic
INSERT INTO public.products (name, description, price, category_id, stock_quantity) VALUES
-- Fruits & Vegetables
('Red Apples', 'Fresh crisp red apples', 3.99, (SELECT id FROM public.categories WHERE name = 'Fruits & Vegetables'), 45),
('Baby Spinach', 'Fresh baby spinach leaves', 2.49, (SELECT id FROM public.categories WHERE name = 'Fruits & Vegetables'), 30),
('Carrots', 'Fresh organic carrots', 1.99, (SELECT id FROM public.categories WHERE name = 'Fruits & Vegetables'), 35),
('Tomatoes', 'Vine-ripened tomatoes', 3.49, (SELECT id FROM public.categories WHERE name = 'Fruits & Vegetables'), 25),
('Avocados', 'Ripe avocados', 1.99, (SELECT id FROM public.categories WHERE name = 'Fruits & Vegetables'), 40),

-- Dairy & Eggs
('Greek Yogurt', 'Plain Greek yogurt', 5.99, (SELECT id FROM public.categories WHERE name = 'Dairy & Eggs'), 20),
('Cheddar Cheese', 'Sharp cheddar cheese block', 6.99, (SELECT id FROM public.categories WHERE name = 'Dairy & Eggs'), 15),
('Free Range Eggs', 'Dozen free-range eggs', 4.99, (SELECT id FROM public.categories WHERE name = 'Dairy & Eggs'), 50),
('Butter', 'Unsalted butter', 4.49, (SELECT id FROM public.categories WHERE name = 'Dairy & Eggs'), 25),

-- Meat & Seafood
('Ground Beef', 'Lean ground beef 1lb', 7.99, (SELECT id FROM public.categories WHERE name = 'Meat & Seafood'), 20),
('Salmon Fillet', 'Fresh Atlantic salmon', 12.99, (SELECT id FROM public.categories WHERE name = 'Meat & Seafood'), 12),
('Bacon', 'Thick cut bacon', 8.99, (SELECT id FROM public.categories WHERE name = 'Meat & Seafood'), 18),

-- Bakery
('Bagels', 'Everything bagels 6-pack', 3.99, (SELECT id FROM public.categories WHERE name = 'Bakery'), 30),
('Croissants', 'Butter croissants 4-pack', 5.99, (SELECT id FROM public.categories WHERE name = 'Bakery'), 15),
('Whole Wheat Bread', 'Organic whole wheat bread', 4.49, (SELECT id FROM public.categories WHERE name = 'Bakery'), 25),

-- Pantry
('Brown Rice', 'Organic brown rice 2lb bag', 4.99, (SELECT id FROM public.categories WHERE name = 'Pantry'), 40),
('Olive Oil', 'Extra virgin olive oil', 8.99, (SELECT id FROM public.categories WHERE name = 'Pantry'), 30),
('Penne Pasta', 'Whole wheat penne pasta', 2.99, (SELECT id FROM public.categories WHERE name = 'Pantry'), 50),
('Black Beans', 'Organic black beans canned', 1.99, (SELECT id FROM public.categories WHERE name = 'Pantry'), 60),

-- Beverages
('Sparkling Water', 'Natural sparkling water 12-pack', 6.99, (SELECT id FROM public.categories WHERE name = 'Beverages'), 25),
('Green Tea', 'Organic green tea bags', 4.99, (SELECT id FROM public.categories WHERE name = 'Beverages'), 35),
('Almond Milk', 'Unsweetened almond milk', 3.99, (SELECT id FROM public.categories WHERE name = 'Beverages'), 40),

-- Snacks
('Mixed Nuts', 'Roasted mixed nuts', 7.99, (SELECT id FROM public.categories WHERE name = 'Snacks'), 30),
('Granola Bars', 'Organic granola bars 12-pack', 8.99, (SELECT id FROM public.categories WHERE name = 'Snacks'), 45),
('Pretzels', 'Salted pretzels', 3.49, (SELECT id FROM public.categories WHERE name = 'Snacks'), 55),

-- Frozen Foods
('Frozen Berries', 'Mixed berry blend', 6.99, (SELECT id FROM public.categories WHERE name = 'Frozen Foods'), 20),
('Frozen Pizza', 'Margherita frozen pizza', 7.99, (SELECT id FROM public.categories WHERE name = 'Frozen Foods'), 25),
('Frozen Vegetables', 'Mixed vegetable medley', 3.99, (SELECT id FROM public.categories WHERE name = 'Frozen Foods'), 35);

-- Update existing products to have more stock
UPDATE public.products SET stock_quantity = 45 WHERE name = 'Organic Bananas';
UPDATE public.products SET stock_quantity = 35 WHERE name = 'Whole Milk';
UPDATE public.products SET stock_quantity = 28 WHERE name = 'Chicken Breast';
UPDATE public.products SET stock_quantity = 22 WHERE name = 'Sourdough Bread';
UPDATE public.products SET stock_quantity = 50 WHERE name = 'Pasta Sauce';
UPDATE public.products SET stock_quantity = 40 WHERE name = 'Orange Juice';
UPDATE public.products SET stock_quantity = 65 WHERE name = 'Potato Chips';
UPDATE public.products SET stock_quantity = 18 WHERE name = 'Vanilla Ice Cream';
