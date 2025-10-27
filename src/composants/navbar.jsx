import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      // Détecte si la position de défilement dépasse 50 pixels (ou autre valeur)
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Définition des classes dynamiques
  const navClasses = scrolled
    ? "bg-white shadow-md text-gray-800" 
    : "bg-transparent text-white"; 

  const logoColor = scrolled ? "text-gray-800" : "text-white";
  const linkColor = scrolled ? "text-gray-800" : "text-white";

  return (
    // La classe 'navClasses' gère toutes les couleurs
    <nav
      className={`fixed top-0 left-0 w-full z-3000 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className={`text-2xl font-extrabold ${logoColor}`}>
            <span className="text-yellow-500">Ask</span>
            <span>'iBizna</span>
          </span>
        </a>

        {/* Menu mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden focus:outline-none ${linkColor}`} // Utilise la couleur du lien pour l'icône
        >
          <Menu size={28} />
        </button>

        {/* Liens de navigation */}
        <div
          className={`${
            open
              ? `max-h-60 opacity-100 p-4 shadow-lg ${
                  scrolled ? "bg-white" : "bg-gray-800/90"
                }` // Fond pour le menu mobile
              : "max-h-0 opacity-0 md:opacity-100"
          } md:max-h-none md:flex transition-all duration-300 overflow-hidden flex-col md:flex-row md:items-center md:space-x-10 w-full md:w-auto absolute md:static top-full left-0 right-0 mt-0 md:mt-0`}
        >
          {["Accueil", "Catalogue", "À propos"].map((label) => (
            <a
              key={label}
              href="#"
              className={`block ${linkColor} font-medium hover:text-yellow-500 transition-colors duration-200 text-lg md:text-base py-2 md:py-0`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Bouton Connexion */}
        <div className="hidden md:flex flex-shrink-0">
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors duration-200 shadow-md hover:shadow-lg">
            Connexion
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
