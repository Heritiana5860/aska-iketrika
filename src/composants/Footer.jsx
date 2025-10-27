import {
  Mail,
  MapPin,
  Facebook,
  Phone,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  // Liste des liens de navigation pour éviter la duplication
  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Catalogue", href: "#" },
    { label: "À propos", href: "#" },
  ];

  const corporateLinks = [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions d'utilisation", href: "#" },
    { label: "Gestion des cookies", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    // Ajout d'Instagram, souvent plus pertinent pour le commerce de produits
    { icon: Instagram, href: "#" },
  ];

  return (
    // Ajustement des paddings (py-26 n'est pas standard) et du fond pour un look plus riche
    <footer className="bg-green-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Principale du Footer - Grid 4 colonnes sur desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-green-700 pb-10 mb-8">
          {/* Colonne 1: Logo & Slogan */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-4xl font-extrabold mb-4 text-yellow-400">
              Ask'iBizna
            </h2>
            <p className="text-sm text-green-200 leading-relaxed">
              La plateforme pour la{" "}
              <span className="font-semibold text-white">
                collecte et la distribution
              </span>{" "}
              des meilleurs produits locaux.
            </p>
            {/* Ajout des liens sociaux ici, plus logique pour l'identité */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Styles pour les icônes sociales (couleur inversée pour la visibilité)
                  className="p-2 bg-green-700 hover:bg-yellow-500 transition duration-300 rounded-full text-white hover:text-green-900"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2: Pages de Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-yellow-400">
              Pages
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-green-200 hover:text-white transition duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Corporate/Légal */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-yellow-400">
              Information
            </h3>
            <ul className="space-y-3 text-sm">
              {corporateLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-green-200 hover:text-white transition duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Contact rapide (Email et Téléphone) */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-yellow-400">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a
                  href="mailto:ask@iBizna.com"
                  className="text-green-200 hover:text-white transition duration-200"
                >
                  ask@iBizna.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <a
                  href="tel:+33123456789"
                  className="text-green-200 hover:text-white transition duration-200"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-green-200">
                  42 rue Richer, 75009 Paris
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Copyright et Mentions Légales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-300">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Ask'iBizna. Tous droits réservés.
          </p>
          <p>Créé par Starduste.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
