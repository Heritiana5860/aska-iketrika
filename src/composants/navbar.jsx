import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // ✅ Ajout de useLocation

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // ✅ Pour détecter la route actuelle

  // Détecter le défilement
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Vérifie si on n’est PAS sur la page d’accueil
  const isNotHome =
    location.pathname === "/catalogue" || location.pathname === "/a-propos";

  // ✅ Couleur de fond dynamique :
  // - Vert si on est sur une autre page
  // - Transparent/blanc selon le défilement sur la page d’accueil
  const navClasses = isNotHome
    ? "bg-green-700 text-white shadow-md" // ✅ Vert sur les autres pages
    : scrolled
    ? "bg-white shadow-md text-gray-800"
    : "bg-transparent text-white";

  const logoColor = isNotHome
    ? "text-white"
    : scrolled
    ? "text-gray-800"
    : "text-white";

  const linkColor = isNotHome
    ? "text-white"
    : scrolled
    ? "text-gray-800"
    : "text-white";

  const navLinks = [
    { label: "Accueil", path: "/" },
    { label: "Catalogue", path: "/catalogue" },
    { label: "À propos", path: "/a-propos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ✅ Logo redirige vers la page d’accueil */}
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-extrabold ${logoColor}`}>
            <span className="text-yellow-500">Ask</span>
            <span>'iBizna</span>
          </span>
        </Link>

        {/* Bouton mobile */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden focus:outline-none ${linkColor}`}
        >
          <Menu size={28} />
        </button>

        {/* Liens de navigation */}
        <div
          className={`${
            open
              ? `max-h-60 opacity-100 p-4 shadow-lg ${
                  isNotHome
                    ? "bg-green-600"
                    : scrolled
                    ? "bg-white"
                    : "bg-gray-800/90"
                }`
              : "max-h-0 opacity-0 md:opacity-100"
          } md:max-h-none md:flex transition-all duration-300 overflow-hidden flex-col md:flex-row md:items-center md:space-x-10 w-full md:w-auto absolute md:static top-full left-0 right-0`}
        >
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `block font-medium text-lg md:text-base py-2 md:py-0 transition-colors duration-200 ${
                  isActive
                    ? "text-yellow-400"
                    : `${linkColor} hover:text-yellow-400`
                }`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Bouton Connexion */}
        <div className="hidden md:flex flex-shrink-0">
          <Link
            to="/connexion"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
