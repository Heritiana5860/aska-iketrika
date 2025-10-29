import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, ArrowLeft, Truck, ShieldCheck, MessageCircle, Plus, Minus } from 'lucide-react';
import ProductCard from '../card/ProductCard';
import ProductDetail from '../pages/ProductDetail';


// Main Catalogue Component
const Catalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Toutes régions');
  const [selectedCategory, setSelectedCategory] = useState('Toutes catégories');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Ananas Victoria',
      description: 'Ananas Victoria extra sucrés',
      price: '10 000',
      unit: 'ar/kg',
      location: 'Point de vente',
      region: 'Région',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=400&h=300&fit=crop',
      badge: 'LIEN'
    },
    {
      id: 2,
      name: 'Letchis',
      description: 'Letchis extra sucrés',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 3,
      name: 'Carotte',
      description: 'Carotte de bonne qualité',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 4,
      name: 'Canelle',
      description: 'Canelle du premier qualité',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1596397430542-09c45c9912e7?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 5,
      name: 'Akondro',
      description: 'Akondro extra sucrés',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 6,
      name: 'Vanille',
      description: 'Vanille du premier qualité',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 7,
      name: 'Letchis',
      description: 'Letchis extra sucrés',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 8,
      name: 'Akondro',
      description: 'Akondro extra sucrés',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 9,
      name: 'Canelle',
      description: 'Canelle du premier qualité',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1596397430542-09c45c9912e7?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    },
    {
      id: 10,
      name: 'Carotte',
      description: 'Carotte de bonne qualité',
      price: '20 000',
      unit: 'ar/kg',
      location: 'Ferme d\'Mandrafify',
      region: 'Manakara',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
      badge: 'RUPTURE'
    }
  ];

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Catalogue Produits */}
          <div className="lg:col-span-1">
            <h1 className="text-3xl font-bold mb-2">Catalogue Produits</h1>
            <p className="text-gray-600 mb-6">Découvrez les produits frais de nos producteurs locaux</p>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <p className="text-gray-700 font-medium">{products.length} produits trouvés</p>
          </div>

          {/* Right Section - Modal filters */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-1">Modal filtre par régions</h2>
            <p className="text-3xl font-light mb-6">Model hello Work</p>
            
            <div className="flex gap-4 mb-8">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              >
                <option>Toutes régions</option>
                <option>Manakara</option>
                <option>Région</option>
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              >
                <option>Toutes catégories</option>
                <option>Fruits</option>
                <option>Légumes</option>
                <option>Épices</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onViewClick={handleViewProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;