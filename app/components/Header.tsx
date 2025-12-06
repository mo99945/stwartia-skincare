import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">
          <Link href="/">STWARTIA</Link>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-8 items-center font-semibold text-sm text-gray-700">
          <Link href="/concern" className="hover:text-black">BY CONCERN</Link>
          <Link href="/products" className="hover:text-black">BY PRODUCT</Link>
          <Link href="/diagnostics" className="hover:text-black">OUR DIAGNOSTICS</Link>
          <Link href="/offers" className="hover:text-black">OFFERS</Link>
          <Link href="/about" className="hover:text-black">ABOUT US</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link href="/account" className="text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
