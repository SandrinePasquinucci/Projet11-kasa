// import "./apropos.css";

// function Apropos() {
//   return (
//     <div className="apropos">
//       <h3>A PROPOS</h3>
//     </div>
//   );
// }

// export default Apropos;

import "./apropos.css";
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
      <Banner texte="" image={aproposimage} />
      <section className="valeurs">
        <Collapse detail={valeurs.fiabilité} titre="Fiabilité" />
        <Collapse detail={valeurs.respect} titre="Respect" />
        <Collapse detail={valeurs.service} titre="Service" />
        <Collapse detail={valeurs.securité} titre="Securité" />
      </section>
    </>
  );
};

export default Apropos;
