import { ArrowUpRight, Mail, Phone } from "lucide-react";
import backImage from '../assets/images/back.jpg';
import manImage from '../assets/images/dada.png';
import drapeau from "../assets/images/drapeau.webp";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen text-white"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 pt-0.1 pb-16">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
            {/* Texte à gauche */}
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="border border-yellow-400 rounded-full px-6 py-2 text-yellow-400 text-sm font-semibold bg-black/30 inline-flex items-center gap-2 mb-6">
                <span className="text-yellow-400">●</span>
                Solutions numériques agricoles MG
                <img src={drapeau} alt="MG flag" className="w-6 h-4" />
              </div>

              {/* Texte principal */}
              <h1 className="text-4xl md:text-5xl leading-tight mb-6">
                Connectez-vous aux <br /> producteurs locaux <br /> de votre région
              </h1>

              <p className="max-w-xl text-lg md:text-xl text-white/90 mb-8">
                Ask'iBizna facilite l'accès aux produits frais et locaux tout en
                soutenant l'économie agricole
              </p>

              {/* Boutons */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-green-700 px-8 py-3 hover:bg-green-600 text-white font-semibold rounded-full flex items-center gap-2 transition">
                  Découvrir
                  <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-yellow-500 px-8 py-3 hover:bg-yellow-500 hover:text-black text-white font-semibold rounded-full flex items-center gap-2 transition">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  Contact
                </button>
              </div>
            </div>

            {/* Image de l'homme à droite */}
            <div className="hidden md:block relative">
              <img 
                src={manImage} 
                alt="Producteur local" 
                className="w-[720px] h-auto object-contain relative z-10 mt-12 ml-40"
              />
            </div>
          </div>
        </div>

        {/* Partie jaune */}
        <div className="absolute bottom-0 left-0 z-50 bg-yellow-500 text-black px-32 py-18 md:px-34 flex-1 md:max-w-5xl clip-diagonal">
          <p className="font-medium mb-3 text-xl">
            Vous pouvez aussi nous appeler directement
          </p>
          <div className="flex flex-col gap-3 md:flex-row gap-6 mt-2">
            <div className="text-lg flex items-center gap-2">
              <span>
                <Phone className="text-green-700" />
              </span>
              <span>034 17 127 42</span>
            </div>
            <div className="text-lg flex items-center gap-2">
              <span>
                <Mail className="text-green-700" />
              </span>
              <span>ask@iBizna-services.com</span>
            </div>
          </div>
        </div>

        {/* Section Bottom */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row overflow-hidden">
          {/* Partie verte */}
          <div className="relative bg-green-700 grid grid-cols-2 md:grid-cols-4 gap-4 justify-around items-center flex-1 p-12 md:p-16">
            <div className="col-span-1"></div>

            {/* Texte défilant */}
            <div className="col-span-3 flex overflow-hidden whitespace-nowrap text-4xl font-semibold">
              <div className="animate-marquee flex gap-66">
                <span>Vortex</span>
                <span>Travel Explorer</span>
                <span>Fuzion</span>
                <span>MediaFury</span>
              </div>
              {/* Duplication pour une boucle fluide */}
              <div className="animate-marquee flex gap-66" aria-hidden="true">
                <span>Vortex</span>
                <span>Travel Explorer</span>
                <span>Fuzion</span>
                <span>MediaFury</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;