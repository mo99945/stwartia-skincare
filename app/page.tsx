import React from 'react';
import Link from 'next/link';
import { ProductCard } from './components/ProductCard';

// New component for category cards
const CategoryCard = ({ imageUrl, name, description, href }) => (
  <Link href={href} legacyBehavior>
    <a className="group relative block aspect-square w-full h-full overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </a>
  </Link>
);


export default function Home() {
  const categories = [
    { name: 'Anti-Aging', description: 'Reduce wrinkles & fine lines', href: '/concern/anti-aging', imageUrl: '/placeholder.svg' },
    { name: 'Acne', description: 'Target breakouts & blemishes', href: '/concern/acne', imageUrl: '/placeholder.svg' },
    { name: 'Hydration', description: 'Boost moisture & plump skin', href: '/concern/hydration', imageUrl: '/placeholder.svg' },
    { name: 'Sun Protection', description: 'Shield skin from UV damage', href: '/concern/sun-protection', imageUrl: '/placeholder.svg' },
  ];

  const bestSellers = [
    { name: 'Vitamin C Serum', price: '$45.00', imageUrl: '' },
    { name: 'Daily UV Defense', price: '$35.00', imageUrl: '' },
    { name: 'Pureté Thermale', price: '$22.00', imageUrl: '' },
    { name: 'Aqualia Rich Cream', price: '$40.00', imageUrl: '' },
  ];

  const ingredients = [
    { name: 'Hyaluronic Acid', description: 'For intense hydration', imageUrl: '/placeholder.svg' },
    { name: 'Vitamin C', description: 'For a radiant glow', imageUrl: '/placeholder.svg' },
    { name: 'Niacinamide', description: 'To calm and clear skin', imageUrl: '/placeholder.svg' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100 h-[60vh] min-h-[400px] flex items-center justify-center text-center text-black">
        <div className="z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-bold">Radiant Skin Awaits</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Discover our dermatologist-recommended solutions for a healthier, more vibrant complexion.
          </p>
          <Link href="/products" legacyBehavior>
            <a className="mt-8 inline-block bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105">
              Shop Now
            </a>
          </Link>
        </div>
        <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">SHOP BY CONCERN</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">DISCOVER OUR INGREDIENTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient) => (
              <div key={ingredient.name} className="text-center">
                <div className="relative aspect-square w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img src={ingredient.imageUrl} alt={ingredient.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-xl">{ingredient.name}</h3>
                <p className="text-gray-600 mt-2">{ingredient.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
