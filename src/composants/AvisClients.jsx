import AvisCarte from "./AvisCarte"; // Assurez-vous d'importer le nouveau composant

// Les données d'avis
const AVIS_CLIENTS = [
  {
    id: 1,
    nom: "Jean Dupont",
    commentaire:
      "Excellente expérience, produits de qualité et service rapide ! Je recommande vivement cette plateforme pour les produits locaux.",
    note: 5,
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    id: 2,
    nom: "Marie Curie",
    commentaire:
      "Service client réactif et produits de qualité constante. L'expérience d'achat est très fluide, même sur mobile.",
    note: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
  },
  {
    id: 3,
    nom: "Albert Einstein",
    commentaire:
      "Une expérience d'achat fluide et agréable. Les descriptions sont précises et les photos fidèles à la réalité.",
    note: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    id: 4,
    nom: "Léa Dubois",
    commentaire:
      "Je suis très satisfaite des fruits que j'ai reçus. Fraîcheur et goût au rendez-vous. Bravo aux producteurs !",
    note: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
];

const AvisClients = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto my-20 py-16 px-4 sm:px-6 lg:px-8">
        {/* Titre et statistiques */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Ce que disent nos <span className="text-yellow-500">Clients</span>
          </h2>
          <p className="text-xl text-gray-600">
            Plus de 1000 avis clients. Votre satisfaction est notre priorité.
          </p>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {AVIS_CLIENTS.map((avis) => (
            // Utilisation du composant carte pour un rendu clair
            <AvisCarte
              key={avis.id}
              nom={avis.nom}
              commentaire={avis.commentaire}
              note={avis.note}
              image={avis.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvisClients;
