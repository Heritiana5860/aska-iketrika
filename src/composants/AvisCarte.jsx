import { Star } from "lucide-react";

// Fonction pour générer les étoiles
const renderStars = (note) => {
  const stars = [];
  // Boucle pour les étoiles pleines
  for (let i = 0; i < note; i++) {
    stars.push(
      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
    );
  }
  // Boucle pour les étoiles vides (si la note < 5)
  for (let i = note; i < 5; i++) {
    stars.push(
      <Star key={i} className="w-5 h-5 fill-gray-300 text-gray-300" />
    );
  }
  return stars;
};

const AvisCarte = ({ nom, commentaire, note, image }) => {
  return (
    // Carte avec un style moderne, une ombre subtile et un fond léger
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition duration-300">
      {/* Note et étoiles */}
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(note)}
      </div>

      {/* Commentaire principal */}
      <p className="text-gray-700 italic text-lg flex-grow mb-6">
        "{commentaire}"
      </p>

      {/* Séparateur */}
      <div className="border-t border-gray-100 pt-6 mt-auto">
        {/* Informations Client */}
        <div className="flex items-center space-x-4">
          <img
            // Utilisation d'un fallback si l'image n'est pas trouvée
            src={image || "https://via.placeholder.com/64"}
            alt={`Profil de ${nom}`}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-yellow-500 ring-offset-2"
          />
          <div>
            <p className="text-lg font-bold text-gray-900">{nom}</p>
            <p className="text-sm text-gray-500">Acheteur vérifié</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisCarte;
