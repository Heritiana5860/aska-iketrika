const Carte = ({ title, description, icone }) => {
  return (
    <div
      className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-6 shadow-md 
                    border-2 border-transparent 
                    transform transition-transform duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-xl animate-fadeInUp hover:border-green-700"
    >
      {/* Icône */}
      <div className="p-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-4xl">
        {icone}
      </div>

      {/* Titre */}
      <h2 className="font-semibold text-2xl text-gray-800">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Carte;
