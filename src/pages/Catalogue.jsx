import React, { useState, useEffect } from 'react';
import { Search, Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../composants/card/ProductCard';
import ProductDetail from './ProductDetail';
import productService from '../services/productService';

const Catalogue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Toutes régions');
  const [selectedCategory, setSelectedCategory] = useState('Toutes catégories');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(12);

  // Charger les produits au montage du composant
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  // Recharger les produits quand les filtres changent
  useEffect(() => {
    setCurrentPage(1); // Reset à la page 1 quand on filtre
    fetchProducts();
  }, [selectedCategory]);

  // Recherche avec debounce
  useEffect(() => {
    if (searchQuery.length >= 3) {
      const timer = setTimeout(() => {
        setCurrentPage(1);
        searchProducts();
      }, 500);
      return () => clearTimeout(timer);
    } else if (searchQuery.length === 0) {
      fetchProducts();
    }
  }, [searchQuery]);

  // Fonction pour transformer les données de l'API vers le format du composant
  const transformProductData = (apiProduct) => {
    return {
      id: apiProduct.id,
      name: apiProduct.nom,
      description: apiProduct.description,
      price: apiProduct.prixVente.toLocaleString('fr-FR'),
      unit: 'ar/kg',
      location: apiProduct.producteur ? `${apiProduct.producteur.prenom} ${apiProduct.producteur.nom}` : 'Non spécifié',
      region: selectedRegion !== 'Toutes régions' ? selectedRegion : 'Madagascar',
      rating: 4.5, // Valeur par défaut, à adapter si vous avez des notes
      image: apiProduct.photos 
        ? `${process.env.REACT_APP_API_URL}/uploads/${apiProduct.photos}`
        : 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      badge: apiProduct.quantite > 0 ? 'DISPONIBLE' : 'RUPTURE',
      category: apiProduct.categorie?.nom || 'Non classé',
      type: apiProduct.type?.nom || '',
      quantite: apiProduct.quantite,
      dateRecolte: apiProduct.dateRecolte
    };
  };

  // Fonction pour récupérer tous les produits
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔄 Chargement des produits, page:', currentPage);
      
      const filters = {};
      if (selectedCategory !== 'Toutes catégories') {
        filters.categorie = selectedCategory;
      }
      
      const response = await productService.getAllProducts(currentPage, limit, filters);
      
      console.log('📦 Réponse API:', response);
      
      // Vérifier si response.data existe
      if (!response.data || !Array.isArray(response.data)) {
        console.error('❌ Format de réponse invalide:', response);
        setError('Format de réponse API invalide');
        return;
      }
      
      // Transformer les données
      const transformedProducts = response.data.map(transformProductData);
      
      console.log('✅ Produits transformés:', transformedProducts);
      
      setProducts(transformedProducts);
      setTotalProducts(response.total || 0);
      setTotalPages(response.pages || 1);
    } catch (err) {
      console.error('❌ Erreur détaillée:', err);
      console.error('❌ Message:', err.message);
      console.error('❌ Response:', err.response);
      
      let errorMessage = 'Erreur lors du chargement des produits';
      
      if (err.code === 'ERR_NETWORK') {
        errorMessage = 'Impossible de se connecter à l\'API. Vérifiez que votre serveur Symfony est démarré sur http://127.0.0.1:8000';
      } else if (err.response?.status === 404) {
        errorMessage = 'Endpoint API non trouvé. Vérifiez l\'URL: http://127.0.0.1:8000/api/produits';
      } else if (err.message.includes('CORS')) {
        errorMessage = 'Erreur CORS. Configurez CORS dans Symfony (voir console pour plus d\'infos)';
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Fonction de recherche
  const searchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await productService.searchProducts(searchQuery, currentPage, limit);
      const transformedProducts = response.data.map(transformProductData);
      setProducts(transformedProducts);
      setTotalProducts(response.total);
      setTotalPages(response.pages);
    } catch (err) {
      setError('Erreur lors de la recherche');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
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
            
            <p className="text-gray-700 font-medium">
              {loading ? 'Chargement...' : `${totalProducts} produits trouvés`}
            </p>
          </div>

          {/* Right Section - Modal filters */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-1">Filtres</h2>
            <p className="text-gray-500 mb-10">Affinez votre recherche</p>
            
            <div className="flex gap-4 mb-8">
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                disabled={loading}
              >
                <option>Toutes régions</option>
                <option>Antananarivo</option>
                <option>Manakara</option>
                <option>Fianarantsoa</option>
                <option>Toamasina</option>
              </select>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                disabled={loading}
              >
                <option>Toutes catégories</option>
                <option>Légumes</option>
                <option>Fruits</option>
                <option>Épices</option>
                <option>Céréales</option>
              </select>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader className="animate-spin w-8 h-8 text-green-600" />
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onViewClick={handleViewProduct} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Précédent
                </button>
                
                <span className="text-gray-700">
                  Page {currentPage} sur {totalPages}
                </span>
                
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Suivant
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}

        {/* No Products Message */}
        {!loading && products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Aucun produit trouvé</p>
            <p className="text-gray-500 mt-2">Essayez de modifier vos filtres de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogue;