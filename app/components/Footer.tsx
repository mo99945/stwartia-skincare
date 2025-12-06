import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* OUR POLICY */}
          <div>
            <h3 className="font-bold mb-4">OUR POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/legal-information" className="hover:underline">Legal Information</Link></li>
              <li><Link href="/cookie-policy" className="hover:underline">Cookie policy</Link></li>
              <li><button className="hover:underline">Cookies settings</button></li>
            </ul>
          </div>

          {/* CUSTOMER CARE */}
          <div>
            <h3 className="font-bold mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact-us" className="hover:underline">Contact us</Link></li>
            </ul>
          </div>

          {/* STAY IN TOUCH */}
          <div>
            <h3 className="font-bold mb-4">STAY IN TOUCH</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter to receive our latest news and offers.</p>
            <form>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full p-2 border border-gray-300 rounded mb-2 text-sm"
              />
              <div className="flex items-start text-xs">
                <input type="checkbox" id="terms" className="mr-2 mt-1"/>
                <label htmlFor="terms">I agree to the Terms & Conditions and Privacy Policy.</label>
              </div>
              <button 
                type="submit" 
                className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              {/* Add Social Icons here */}
              <Link href="#" className="text-gray-600 hover:text-black">FB</Link>
              <Link href="#" className="text-gray-600 hover:text-black">IG</Link>
              <Link href="#" className="text-gray-600 hover:text-black">YT</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-xs">
          <p>© STWARTIA INC. 2025. ALL RIGHTS RESERVED.</p>
          <p>STWARTIA is part of L'Oréal ACD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
