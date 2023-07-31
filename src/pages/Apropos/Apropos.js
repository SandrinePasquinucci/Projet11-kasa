import "./apropos.css";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aproposimage from "../../assets/apropos.png";

const valeurs = {
  fiabilité:
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  respect:
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  service:
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  securité:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
};

const Apropos = () => {
  return (
    <>
      <Header />
      <Banner texte="" image={aproposimage} />
      <section className="valeurs">
        <Collapse page="Apropos" titre="Fiabilité" detail={valeurs.fiabilité} />
        <Collapse page="Apropos" titre="Respect" detail={valeurs.respect} />
        <Collapse page="Apropos" titre="Service" detail={valeurs.service} />
        <Collapse page="Apropos" titre="Securité" detail={valeurs.securité} />
      </section>
    </>
  );
};

export default Apropos;
