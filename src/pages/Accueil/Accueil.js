import "./accueil.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import bannerimage from "../../assets/banniere.png";

const bannertitre = "Chez vous, partout et ailleurs";
const Accueil = () => {
  return (
    <>
      <Header />
      <Banner texte={bannertitre} image={bannerimage} />
      <Gallery />
    </>
  );
};

export default Accueil;
