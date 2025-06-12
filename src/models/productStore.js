// models/productStore.js
const { v4: uuidv4 } = require('uuid');

// Sample in-memory products database
let products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop with 16GB RAM', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: 'Latest model with 128GB storage', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Programmable coffee maker with timer', price: 50, category: 'kitchen', inStock: false },
  { id: '4', name: 'Blender', description: 'Multi-speed blender for smoothies', price: 60, category: 'kitchen', inStock: true },
  { id: '5', name: 'Vacuum Cleaner', description: 'Bagless vacuum cleaner with HEPA filter', price: 150, category: 'home', inStock: true },
  { id: '6', name: 'Microwave Oven', description: 'Compact microwave with grill', price: 90, category: 'kitchen', inStock: true },
  { id: '7', name: 'Headphones', description: 'Wireless over-ear headphones with noise cancellation', price: 200, category: 'electronics', inStock: true },
  { id: '8', name: 'Tablet', description: '10-inch tablet with stylus support', price: 350, category: 'electronics', inStock: false },
  { id: '9', name: 'Desk Lamp', description: 'LED desk lamp with adjustable brightness', price: 30, category: 'home', inStock: true },
  { id: '10', name: 'Electric Kettle', description: '1.5L electric kettle with auto shut-off', price: 25, category: 'kitchen', inStock: true },
  { id: '11', name: 'Camera', description: 'DSLR camera with 24MP sensor', price: 700, category: 'electronics', inStock: false },
  { id: '12', name: 'Toaster', description: '2-slice toaster with browning control', price: 20, category: 'kitchen', inStock: true },
  { id: '13', name: 'Smartwatch', description: 'Fitness tracker with heart-rate monitor', price: 150, category: 'electronics', inStock: true },
  { id: '14', name: 'Air Conditioner', description: 'Portable air conditioner with remote control', price: 500, category: 'home', inStock: false },
  { id: '15', name: 'Gaming Mouse', description: 'Ergonomic gaming mouse with RGB lighting', price: 40, category: 'electronics', inStock: true },
  { id: '16', name: 'Bookshelf', description: '5-tier wooden bookshelf', price: 120, category: 'furniture', inStock: true },
  { id: '17', name: 'Office Chair', description: 'Adjustable ergonomic office chair', price: 180, category: 'furniture', inStock: false },
  { id: '18', name: 'TV', description: '50-inch 4K UHD Smart TV', price: 600, category: 'electronics', inStock: true },
  { id: '19', name: 'Fan', description: 'Oscillating stand fan with timer', price: 45, category: 'home', inStock: true },
  { id: '20', name: 'Router', description: 'Dual-band WiFi router with parental control', price: 85, category: 'electronics', inStock: true },
  { id: '21', name: 'Washing Machine', description: '7kg front load washer with inverter motor', price: 450, category: 'home', inStock: true },
  { id: '22', name: 'Dryer', description: 'Electric tumble dryer with anti-wrinkle function', price: 400, category: 'home', inStock: false },
  { id: '23', name: 'Cookware Set', description: '10-piece non-stick cookware set', price: 100, category: 'kitchen', inStock: true },
  { id: '24', name: 'Refrigerator', description: 'Double-door fridge with inverter compressor', price: 950, category: 'kitchen', inStock: true },
  { id: '25', name: 'Gaming Console', description: 'Latest gen gaming console with 1TB storage', price: 500, category: 'electronics', inStock: false },
  { id: '26', name: 'Books', description: 'Box set of bestselling novels', price: 60, category: 'books', inStock: true },
  { id: '27', name: 'Notebook', description: 'Hardcover notebook with 200 pages', price: 10, category: 'stationery', inStock: true },
  { id: '28', name: 'Pen Set', description: 'Luxury fountain pen gift set', price: 35, category: 'stationery', inStock: false },
  { id: '29', name: 'Monitor', description: '27-inch 144Hz gaming monitor', price: 300, category: 'electronics', inStock: true },
  { id: '30', name: 'Keyboard', description: 'Mechanical keyboard with blue switches', price: 70, category: 'electronics', inStock: true },
  { id: '31', name: 'Mouse Pad', description: 'Extended mouse pad with stitched edges', price: 15, category: 'electronics', inStock: true },
  { id: '32', name: 'Smart Light', description: 'Color-changing smart bulb with app control', price: 25, category: 'home', inStock: true },
  { id: '33', name: 'Printer', description: 'All-in-one wireless inkjet printer', price: 120, category: 'electronics', inStock: false },
  { id: '34', name: 'Frying Pan', description: 'Non-stick frying pan 28cm', price: 30, category: 'kitchen', inStock: true },
  { id: '35', name: 'Electric Grill', description: 'Indoor electric grill with removable plates', price: 70, category: 'kitchen', inStock: true },
  { id: '36', name: 'Mirror', description: 'Wall-mounted decorative mirror', price: 90, category: 'home', inStock: false },
  { id: '37', name: 'Curtains', description: 'Blackout curtains for bedroom', price: 50, category: 'home', inStock: true },
  { id: '38', name: 'Shoes', description: 'Running shoes with memory foam', price: 80, category: 'fashion', inStock: true },
  { id: '39', name: 'Jacket', description: 'Waterproof windbreaker jacket', price: 110, category: 'fashion', inStock: false },
  { id: '40', name: 'Backpack', description: 'Anti-theft laptop backpack', price: 65, category: 'fashion', inStock: true },
  { id: '41', name: 'Sunglasses', description: 'UV400 polarized sunglasses', price: 30, category: 'fashion', inStock: true },
  { id: '42', name: 'Watch', description: 'Analog wristwatch with leather strap', price: 95, category: 'fashion', inStock: true },
  { id: '43', name: 'T-shirt', description: 'Cotton t-shirt with printed design', price: 20, category: 'fashion', inStock: true },
  { id: '44', name: 'Desk', description: 'Compact writing desk with drawer', price: 150, category: 'furniture', inStock: false },
  { id: '45', name: 'Bed Frame', description: 'Queen-size metal bed frame', price: 250, category: 'furniture', inStock: true },
  { id: '46', name: 'Mattress', description: 'Memory foam mattress', price: 400, category: 'furniture', inStock: true },
  { id: '47', name: 'Nightstand', description: '2-drawer wooden nightstand', price: 90, category: 'furniture', inStock: false },
  { id: '48', name: 'Bookshelf Speaker', description: 'Bluetooth-enabled stereo speakers', price: 130, category: 'electronics', inStock: true },
  { id: '49', name: 'Portable Charger', description: '10000mAh power bank with USB-C', price: 45, category: 'electronics', inStock: true },
  { id: '50', name: 'Tripod', description: 'Aluminum tripod for DSLR and smartphones', price: 55, category: 'electronics', inStock: true },
  { id: '51', name: 'Guitar', description: 'Acoustic guitar with gig bag', price: 180, category: 'music', inStock: true },
  { id: '52', name: 'Keyboard (Piano)', description: '61-key digital keyboard with stand', price: 220, category: 'music', inStock: true },
  { id: '53', name: 'Drum Set', description: 'Beginner electronic drum set', price: 350, category: 'music', inStock: false },
  { id: '54', name: 'Violin', description: 'Full-size violin with bow and case', price: 190, category: 'music', inStock: true },
  { id: '55', name: 'Microphone', description: 'USB condenser microphone for podcasting', price: 85, category: 'music', inStock: true },
  { id: '56', name: 'Camera Tripod', description: 'Flexible tripod with phone mount', price: 35, category: 'electronics', inStock: true },
  { id: '57', name: 'Gaming Chair', description: 'Reclining ergonomic gaming chair', price: 250, category: 'furniture', inStock: false },
  { id: '58', name: 'Smart Plug', description: 'WiFi smart plug with voice control', price: 18, category: 'home', inStock: true },
  { id: '59', name: 'Wall Clock', description: 'Minimalist wall clock', price: 25, category: 'home', inStock: true },
  { id: '60', name: 'Bluetooth Speaker', description: 'Portable waterproof Bluetooth speaker', price: 60, category: 'electronics', inStock: true }
];



const getAll = () => products;

const getById = (id) => products.find(p => p.id === id);

const create = (product) => {
  const newProduct = { id: uuidv4(), ...product };
  products.push(newProduct);
  return newProduct;
};
const update = (id, data) => {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...data };
    return products[index];
  }
  return null;
};
const remove = (id) => {
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    return products.splice(index, 1)[0];
  }
  return null;
};

module.exports = { getAll, getById, create, update, remove };
