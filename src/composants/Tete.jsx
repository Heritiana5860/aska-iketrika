const Tete = ({ title, description }) => {
  return (
    <header className="max-w-3xl mx-auto mb-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
        {description}
      </p>
    </header>
  );
};

export default Tete;
