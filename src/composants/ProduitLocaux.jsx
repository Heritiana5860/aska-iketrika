// Fichier ProduitLocaux.jsx
import ProduitCarte from "./ProduitCarte";

// 1. Déplacer les données à l'extérieur (pour la lisibilité et potentiellement la performance)
const PRODUITS_LOCAUX = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/893500978/fr/photo/bananes-sont-toujours-en-demande.webp?a=1&b=1&s=612x612&w=0&k=20&c=kXTj0Qke0C2Nn3J1V9xvIksVIG94kjBdfyB6bLUCZr8=",
    region: "Vatovavy",
    text_image: "Banane",
    titre: "Mananjary",
    description:
      "Une délicieuse banane de la région de Vatovavy. Un goût unique et une qualité exceptionnelle.",
    size: "large",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1759162339512-c2e0f23d4dff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmUlMjBmcnVpdCUyMG1hbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    region: "Analamanga",
    text_image: "Mangue",
    titre: "Antananarivo",
    description:
      "Une mangue juteuse de la région d'Analamanga. Parfaitement mûre et riche en saveurs.",
    size: "small", // Nouveau prop pour la taille (md:col-span-1)
    showClients: true, // Nouveau prop pour afficher le badge clients
  },
];

const ProduitLocaux = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto my-20 py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          {/* 2. Titre corrigé et amélioré */}
          Découvrez nos <span className="text-yellow-500">
            Produits Locaux
          </span>{" "}
          et leurs Terroirs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {" "}
          {/* Augmentation du gap à 8 */}
          {PRODUITS_LOCAUX.map((produit) => (
            <div
              key={produit.id} // 3. Utilisation de l'ID comme clé
              // 4. Utilisation du nouveau prop 'size' pour la classe de colonne
              className={
                produit.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }
            >
              <ProduitCarte
                // Utilisation de l'opérateur de propagation pour passer toutes les propriétés
                {...produit}
                // Passage explicite du nouveau prop showClients
                showClients={produit.showClients}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProduitLocaux;
