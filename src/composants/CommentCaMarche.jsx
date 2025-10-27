import { Search, UserPlus, ShoppingCart, CheckCircle } from "lucide-react";

// Mapping des icônes pour les étapes (utilisé dans la structure ci-dessus)
const ICON_MAP = {
  Search,
  UserPlus,
  ShoppingCart,
  CheckCircle,
};

// Les données ont été déplacées ici ou dans un fichier de constantes
const steps = [
  {
    icon: Search,
    title: "1. Parcourez le catalogue",
    description:
      "Explorez notre vaste sélection de produits locaux sans engagement. Utilisez les filtres pour trouver ce que vous cherchez.",
  },
  {
    icon: UserPlus,
    title: "2. Créez un compte acheteur",
    description:
      "Une inscription rapide vous donne accès aux tarifs, aux promotions et vous permet de sauvegarder vos favoris.",
  },
  {
    icon: ShoppingCart,
    title: "3. Ajoutez au panier et commandez",
    description:
      "Remplissez votre panier et finalisez la commande en quelques clics. Choisissez votre mode de paiement et de livraison.",
  },
  {
    icon: CheckCircle,
    title: "4. Réceptionnez vos produits",
    description:
      "Suivez votre commande en temps réel et recevez vos produits frais et de qualité directement chez vous.",
  },
];

const CommentCaMarche = () => {
  return (
    // Nouveau style : section avec marge et padding plus standard, couleur de fond plus neutre
    <div className="max-w-7xl mx-auto my-20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-10 lg:p-16 rounded-3xl shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Colonne Gauche : Titre et Marketing */}
        <div className="lg:col-span-2">
          <h1 className="text-sm font-bold uppercase text-yellow-600 mb-4 tracking-wider">
            Notre Processus
          </h1>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Comment ça <span className="text-yellow-500">marche ?</span>
          </h2>

          <p className="text-xl text-gray-700 mb-6">
            La solution complète pour faciliter la{" "}
            <span className="font-semibold">collecte et la distribution</span>{" "}
            des produits locaux.
          </p>

          <blockquote className="text-lg italic text-gray-500 border-l-4 border-yellow-500 pl-4 py-2 mb-10">
            "Transformez votre façon de travailler en numérique : plus de temps
            libre, moins de temps perdu. Chez Ask'iBizna, la sécurisation et la
            qualité des produits sont notre priorité."
          </blockquote>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Explication du catalogue et de la commande
          </h3>

          {/* Bouton d'appel à l'action amélioré */}
          <button className="flex items-center justify-center w-full lg:w-auto px-10 py-4 bg-yellow-500 hover:bg-yellow-600 transition duration-300 text-lg font-bold text-white rounded-xl shadow-lg transform hover:scale-[1.02]">
            Lancez-vous maintenant !
          </button>
        </div>

        {/* Colonne Droite : Étapes du Processus */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
            Les étapes clés pour acheter
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              // Utilisation d'une carte d'étape plus propre et bien espacée
              <div
                key={index}
                className="p-6 bg-yellow-50 bg-opacity-80 rounded-2xl flex items-start space-x-5 border border-yellow-100 hover:shadow-md transition duration-300"
              >
                {/* Icône de l'étape */}
                <div className="flex-shrink-0 mt-1">
                  <step.icon className="w-8 h-8 text-yellow-600 stroke-2" />
                </div>

                {/* Contenu */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCaMarche;
