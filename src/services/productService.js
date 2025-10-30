// src/services/productService.js
import api from './api';

const productService = {
  // Récupérer tous les produits avec pagination
  getAllProducts: async (page = 1, limit = 10, filters = {}) => {
    try {

      const response = await api.get('/produits');
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      throw error;
    }
  },

  // Récupérer un produit par ID
  getProductById: async (id) => {
    try {
      const response = await api.get(`/produits/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du produit ${id}:`, error);
      throw error;
    }
  },

  // Rechercher des produits (adapter selon votre endpoint de recherche)
  searchProducts: async (query, page = 1, limit = 10) => {
    try {
      const response = await api.get('/produits', {
        params: { 
          page,
          limit,
          search: query // Adapter selon votre API
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
      throw error;
    }
  },

  // Filtrer par catégorie
  filterByCategory: async (categoryId, page = 1, limit = 10) => {
    try {
      const response = await api.get('/produits', {
        params: { 
          page,
          limit,
          categorie: categoryId
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors du filtrage par catégorie:', error);
      throw error;
    }
  },

  // Filtrer par type
  filterByType: async (typeId, page = 1, limit = 10) => {
    try {
      const response = await api.get('/produits', {
        params: { 
          page,
          limit,
          type: typeId
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors du filtrage par type:', error);
      throw error;
    }
  },

  // Filtrer par producteur
  filterByProducteur: async (producteurId, page = 1, limit = 10) => {
    try {
      const response = await api.get('/produits', {
        params: { 
          page,
          limit,
          producteur: producteurId
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors du filtrage par producteur:', error);
      throw error;
    }
  }
};

export default productService;