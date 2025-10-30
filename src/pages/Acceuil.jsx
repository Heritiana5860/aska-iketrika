import Hero from "../composants/Hero";
import DevenezAcheteurs from "../composants/DevenezAcheteurs";
import ProduitLocaux from "../composants/ProduitLocaux";
import CommentCaMarche from "../composants/CommentCaMarche";
import AvisClients from "../composants/AvisClients";

const Accueil = () => {
  return (
    <>
      <Hero />
      <DevenezAcheteurs />
      <ProduitLocaux />
      <CommentCaMarche />
      <AvisClients />
    </>
  );
};

export default Accueil;
