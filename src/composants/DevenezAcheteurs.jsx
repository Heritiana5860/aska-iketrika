import { Search, ChartColumn, MessagesSquare } from "lucide-react";
import Carte from "./Carte";
import Tete from "./Tete";

const DevenezAcheteurs = () => {
  const acheteurs = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Producteurs & Points de vente",
      description:
        "Les producteurs locaux mettent leurs produits en ligne, et les points de vente référencent leur offre.",
    },
    {
      icon: <ChartColumn className="w-8 h-8" />,
      title: "Acheteurs",
      description:
        "Les acheteurs découvrent et commandent des produits frais, locaux et de qualité, directement depuis la plateforme.",
    },
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Livraison",
      description:
        "Un réseau de livreurs assure une distribution rapide et efficace, pour que la fraîcheur arrive jusqu’à vous.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-20 px-6 py-16 sm:px-6 lg:px-8">
      {/* En-tête */}
      <section className="mb-16 text-center">
        <Tete
          title="Devenez Acheteurs"
          description="Rejoignez notre plateforme pour accéder à des produits frais et locaux."
        />
      </section>

      {/* Grille de cartes */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {acheteurs.map((acheteur, index) => (
          <Carte
            key={index}
            title={acheteur.title}
            description={acheteur.description}
            icone={acheteur.icon}
          />
        ))}
      </section>
    </div>
  );
};

export default DevenezAcheteurs;
