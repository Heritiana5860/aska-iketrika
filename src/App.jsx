import { Routes, Route } from "react-router-dom"; 
import Navbar from "./composants/navbar";
import Footer from "./composants/Footer";
import Accueil from "./pages/Acceuil";
import Catalogue from "./pages/Catalogue";
import Apropos from "./pages/Apropos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/catalogue" element={<Catalogue />} /> 
        <Route path="/a-propos" element={<Apropos />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
