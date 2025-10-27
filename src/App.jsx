import AvisClients from "./composants/AvisClients";
import CommentCaMarche from "./composants/CommentCaMarche";
import DevenezAcheteurs from "./composants/DevenezAcheteurs";
import Footer from "./composants/Footer";
import Hero from "./composants/Hero";
import ProduitLocaux from "./composants/ProduitLocaux";

function App() {
  return (
    <>
      <Hero />
      <DevenezAcheteurs />
      <ProduitLocaux />
      <CommentCaMarche />
      <AvisClients />
      <Footer />
    </>
  );
}

export default App;
