// Fichier ProduitCarte.jsx
import { ArrowRight } from "lucide-react";

const ProduitCarte = ({
  image,
  region,
  text_image, 
  titre,
  description,
  showClients,
}) => {
  return (
    // Amélioration de l'ombre et de l'effet de survol
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full">
      {/* Image */}
      {/* Hauteur ajustée pour être plus visuelle */}
      <div className="relative h-72 md:h-80">
        <img
          src={image}
          alt={text_image}
          className="w-full h-full object-cover"
        />

        {/* Overlay dégradé plus prononcé pour le contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Région - Style amélioré */}
        <div className="absolute top-4 left-4 bg-yellow-600 bg-opacity-95 text-white px-5 py-1.5 rounded-full shadow-lg">
          <span className="text-base font-bold uppercase tracking-wide">
            {region}
          </span>
        </div>

        {/* Nom du produit centré - Légère amélioration du style */}
        <div className="absolute bottom-4 left-4">
          <span className="text-white font-extrabold text-5xl drop-shadow-lg">
            {text_image}
          </span>
        </div>
      </div>

      {/* Contenu - flex-grow pour que les cartes aient la même hauteur (surtout pour le md:col-span-2) */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {titre}
        </h3>
        <p className="text-gray-700 text-lg mb-8 flex-grow">{description}</p>{" "}
        {/* flex-grow pour le texte */}
        {/* Bouton amélioré */}
        <button className="flex items-center justify-end text-xl text-yellow-600 hover:text-yellow-700 font-semibold transition-colors">
          <span className="mr-3 hover:border-yellow-700 pb-0.5">
            Voir la fiche produit
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {showClients && ( // Utilisation de showClients
        <div className="border-t border-gray-100 flex items-center gap-4 py-4 px-8 bg-gray-50 rounded-b-3xl">
          <div className="flex -space-x-3">
            {" "}
            {/* Espacement ajusté */}
            {/* Remplacement des div génériques par des placeholders d'images de profil */}
            <div className="w-10 h-10 bg-blue-300 rounded-full border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 bg-green-300 rounded-full border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 bg-red-300 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="ml-2">
            <span className="font-bold text-xl text-gray-900">+200</span>
            <span className="ml-1 text-gray-600 text-sm">
              clients satisfaits
            </span>
            <div className="text-gray-500 text-xs mt-0.5">
              Rejoignez notre communauté
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitCarte;
