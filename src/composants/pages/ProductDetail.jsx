import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, ArrowLeft, Truck, ShieldCheck, MessageCircle, Plus, Minus } from 'lucide-react';
import ProductCard from '../card/ProductCard';

// ImageGallery Component
const ImageGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="bg-yellow-400 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
              selectedImage === idx ? 'border-green-600' : 'border-gray-200'
            }`}
          >
            <img src={img} alt={`${productName} ${idx + 1}`} className="w-full h-24 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

// ProductInfo Component
const ProductInfo = ({ product }) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Origine:</h3>
        <p className="text-gray-600">{product.origin}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Certification:</h3>
        <p className="text-gray-600">{product.certification}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Conservation:</h3>
        <p className="text-gray-600">{product.conservation}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Livraison:</h3>
        <p className="text-gray-600">{product.delivery}</p>
      </div>
      <div className="flex gap-6 pt-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">Qualité garantie</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-green-600" />
          <span className="text-sm text-gray-700">Livraison rapide</span>
        </div>
      </div>
    </div>
  );
};


// ReviewItem Component
const ReviewItem = ({ review }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold">{review.author}</h4>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      <p className="text-gray-600 text-sm">{review.comment}</p>
    </div>
  );
};

const ProductDetail = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const totalPrice = parseInt(product.price.replace(/\s/g, '')) * quantity;

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <button onClick={onBack} className="flex items-center gap-2 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          <span>/</span>
          <span>Catalogue</span>
          <span>/</span>
          <span>légumes</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Image Gallery */}
          <ImageGallery images={product.images || [product.image, product.image, product.image]} productName={product.name} />

          {/* Right: Product Details */}
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">{product.name} Bio</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <span className="text-gray-600">({product.rating})</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">En stock</span>
              <button className="text-blue-600 text-sm flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                Message
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600">Région: {product.region}</p>
              <p className="text-xs text-gray-500">{product.location}</p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">{product.price}</span>
              <span className="text-gray-600 ml-2">{product.unit}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-700">Quantité:</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <span className="text-gray-600">kg</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-gray-700">Total: </span>
              <span className="text-xl font-bold">{totalPrice.toLocaleString()} AR</span>
            </div>

            <div className="flex gap-3 mb-8">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium">
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </button>
              <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-3">Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.detailedDescription || "Tomates biologiques fraîches, cultivées sans pesticides dans notre ferme de Yamoussoukro. Ces tomates sont parfaites pour vos salades, sauces et plats cuisinés. Elles sont récoltées à maturité pour garantir le meilleur goût."}
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-3">Informations produit</h2>
              <ProductInfo product={{
                origin: product.origin || "Marofarihy, Manakara",
                certification: product.certification || "Agriculture Biologique",
                conservation: product.conservation || "7-10 jours au réfrigérateur",
                delivery: product.delivery || "24-48h après commande"
              }} />
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-xl mb-2">Avis clients</h2>
          <p className="text-gray-600 text-sm mb-6">Ce que pensent nos clients de ce produit</p>
          
          <div className="space-y-4">
            <ReviewItem review={{
              author: "Marie Kouassi",
              date: "2024-01-10",
              comment: "Excellentes tomates ! Très savoureuses et fraîches."
            }} />
            <ReviewItem review={{
              author: "Marie Kouassi",
              date: "2024-01-10",
              comment: "Excellentes tomates ! Très savoureuses et fraîches."
            }} />
            <ReviewItem review={{
              author: "Marie Kouassi",
              date: "2024-01-10",
              comment: "Excellentes tomates ! Très savoureuses et fraîches."
            }} />
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="font-semibold text-xl mb-6">Du même Région</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              product={{
                id: 101,
                name: 'Carotte',
                description: 'Carotte de bonne qualité',
                price: '20 000',
                unit: 'ar/kg',
                location: 'Ferme d\'Mandrafify',
                region: 'Manakara',
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
                badge: 'RUPTURE'
              }}
              onViewClick={onBack}
            />
            <ProductCard 
              product={{
                id: 102,
                name: 'Carotte',
                description: 'Carotte de bonne qualité',
                price: '20 000',
                unit: 'ar/kg',
                location: 'Ferme d\'Mandrafify',
                region: 'Manakara',
                rating: 4.7,
                image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
                badge: 'RUPTURE'
              }}
              onViewClick={onBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;