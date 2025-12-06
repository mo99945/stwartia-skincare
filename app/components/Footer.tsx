import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2">STAY IN TOUCH</h3>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter to receive our latest news and offers.</p>
          <form className="max-w-md mx-auto">
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button 
                type="submit" 
                className="bg-black text-white py-3 px-6 rounded-r-md hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
            <div className="flex items-start mt-4 text-xs text-gray-500">
              <input type="checkbox" id="terms_footer" className="mr-2 mt-1"/>
              <label htmlFor="terms_footer">I agree to the Stwartia Skincare <Link href="/privacy-policy" className="underline hover:text-black">Terms & Conditions and Privacy Policy</Link>.</label>
            </div>
          </form>
        </div>

        {/* Links and Social */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-3">
              <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/shipping-returns" className="hover:underline">Shipping & Returns</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT US</h3>
            <ul className="space-y-3">
              <li><Link href="/our-brand" className="hover:underline">Our Brand</Link></li>
              <li><Link href="/expert-advice" className="hover:underline">Expert Advice</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">OUR POLICY</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/legal-information" className="hover:underline">Legal Information</Link></li>
              <li><Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.812c-3.233 0-4.188 1.508-4.188 4.001v2.999z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.668.014-4.944.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.271-.073 1.671-.073 4.948 0 3.277.014 3.676.072 4.944.2 4.358 2.618 6.78 6.98 6.98 1.27.059 1.67.073 4.946.073 3.278 0 3.676-.014 4.944-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.271.073-1.671.073-4.947 0-3.279-.014-3.678-.072-4.944-.199-4.358-2.618-6.78-6.979-6.98-1.271-.059-1.671-.073-4.946-.073zm0 7.384c-2.752 0-4.99 2.239-4.99 4.99s2.238 4.99 4.99 4.99 4.99-2.239 4.99-4.99-2.238-4.99-4.99-4.99zm0 8.98c-2.209 0-3.99-1.791-3.99-3.99s1.781-3.99 3.99-3.99 3.99 1.791 3.99 3.99-1.781 3.99-3.99 3.99zm6.54-.964c-.484 0-.911-.395-.911-.911s.427-.911.911-.911 1.089.427 1.089.911-.485.911-1.089.911z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l7 3.993-7 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>© STWARTIA INC. 2025. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
