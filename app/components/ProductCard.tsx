
import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        {/* Placeholder for image */}
        <div className="w-full h-full bg-gray-100" />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href="#" legacyBehavior>
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};
