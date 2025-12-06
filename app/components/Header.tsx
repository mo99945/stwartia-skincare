import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Top bar */}
        <div className="w-full flex justify-between items-center border-b pb-2 mb-2">
          <div>
            <Link href="/ae-en/find-a-store" className="text-xs text-gray-600 hover:underline">Find A Store</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xs text-gray-800 font-semibold">En</Link>
            <span className="text-gray-300">|</span>
            <Link href="/ar" className="text-xs text-gray-600">العربية</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">STWARTIA</Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/products" className="text-black hover:text-gray-600">OUR PRODUCTS</Link>
          <Link href="/expert-advice" className="text-black hover:text-gray-600">EXPERT ADVICE</Link>
          <Link href="/serums-quiz" className="text-black hover:text-gray-600">SERUMS QUIZ</Link>
          <Link href="/our-brand" className="text-black hover:text-gray-600">OUR BRAND</Link>
        </nav>

        {/* Search and Account */}
        <div className="flex items-center space-x-4">
          <button className="text-black">
            {/* Search Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link href="/account" className="text-black">
            {/* Account Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
