// src/services/api.js
import axios from 'axios';

// Configuration de base d'Axios
const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Intercepteur pour les requêtes
api.interceptors.request.use(
  (config) => {
    console.log('🚀 Requête envoyée:', config.url, config.params);
    
    // Récupérer le token du localStorage si nécessaire
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('❌ Erreur de requête:', error);
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
api.interceptors.response.use(
  (response) => {
    console.log('✅ Réponse reçue:', response.data);
    return response;
  },
  (error) => {
    console.error('❌ Erreur complète:', error);
    
    if (error.response) {
      // Le serveur a répondu avec un code d'erreur
      console.error('📛 Statut:', error.response.status);
      console.error('📛 Data:', error.response.data);
      console.error('📛 Headers:', error.response.headers);
      
      switch (error.response.status) {
        case 401:
          console.error('Non autorisé');
          break;
        case 403:
          console.error('Accès interdit');
          break;
        case 404:
          console.error('Ressource non trouvée');
          break;
        case 500:
          console.error('Erreur serveur');
          break;
        default:
          console.error('Erreur:', error.response.data);
      }
    } else if (error.request) {
      // La requête a été faite mais pas de réponse
      console.error('⚠️ Pas de réponse du serveur');
      console.error('⚠️ Request:', error.request);
      console.error('⚠️ Vérifiez que votre API Symfony est bien lancée sur http://127.0.0.1:8000');
      console.error('⚠️ Vérifiez la configuration CORS dans Symfony');
    } else {
      // Erreur lors de la configuration de la requête
      console.error('⚠️ Erreur de configuration:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default api;