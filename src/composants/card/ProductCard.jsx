import React from 'react';
import { Search, ShoppingCart, Heart } from 'lucide-react';

// ProductCard Component
const ProductCard = ({ product, onViewClick }) => {
  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400 text-sm">★</span>
        ))}
        <span className="text-gray-600 text-sm ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 right-3 bg-cyan-400 text-white text-xs px-3 py-1 rounded-full">
          {product.badge}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="mb-3">
          <p className="text-sm text-gray-700">{product.location}</p>
          <p className="text-xs text-gray-500">{product.region}</p>
        </div>
        
        <div className="mb-3">
          {renderStars(product.rating)}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-green-600 font-bold text-lg">{product.price}</span>
            <span className="text-gray-600 text-sm ml-1">{product.unit}</span>
          </div>
          
          <div className="flex gap-2">
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => onViewClick(product)}
          className="w-full mt-3 border border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          Voir
        </button>
      </div>
    </div>
  );
};

export default ProductCard;