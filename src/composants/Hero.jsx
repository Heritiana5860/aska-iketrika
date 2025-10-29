import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="relative bg-[url('/back.jpg')] bg-cover bg-center min-h-screen text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Contenu principal */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="border border-yellow-400 rounded-full px-6 py-2 text-yellow-400 text-lg font-semibold bg-black/30 inline-flex items-center gap-2">
              <span className="text-yellow-400">•</span>
              Solutions numériques agricoles MG
              <img src="/mg.png" alt="MG flag" className="w-6 h-4" />
            </div>

            {/* Texte principal */}
            <h1 className="text-5xl md:text-6xl leading-tight my-8">
              Connectez-vous aux <br /> producteurs locaux <br /> de votre
              région
            </h1>

            <p className="max-w-xl text-xl md:text-2xl text-white/80">
              Ask'iBizna facilite l'accès aux produits frais et locaux tout en
              soutenant l'économie agricole.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 text-2xl">
              <button className="bg-green-700 px-16 py-4 hover:bg-green-600 text-white font-semibold rounded-full flex items-center gap-2 transition">
                Découvrir{" "}
                <span className="text-xl">
                  <ArrowUpRight />
                </span>
              </button>
              <button className="border border-yellow-500 px-16 py-4 hover:bg-white hover:text-green-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition">
                <span className="text-xl">
                  <Phone className="text-yellow-500" />
                </span>{" "}
                Contact
              </button>
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
