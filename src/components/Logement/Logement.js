import "./logement.css";
import Collapse from "../../components/Collapse/Collapse";

export default function Logement({ ...logement }) {
  return (
    <section className="logement">
      <img alt="" src={logement.cover} className="lgtimage" />

      <h2 className="lgttitre">{logement.title}</h2>
      <div className="lgtlieu">{logement.location}</div>
      <div className="lgttags">{logement.tags}</div>
      <div className="lgtproprio">{logement.host.name}</div>
      <div className="lgtetoiles">{logement.rating}</div>
      <Collapse
        page="logement"
        titre="Description"
        detail={logement.description}
      />
      <Collapse
        page="logement"
        titre="Equipement"
        detail={logement.equipements}
      />
    </section>
  );
}
