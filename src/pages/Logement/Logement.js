import "./logement.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import logements from "../../datas/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Rates from "../../components/Rates/Rates";
import Collapse from "../../components/Collapse/Collapse";
import { useParams, Navigate } from "react-router-dom";

export default function Logement() {
  //https://lo-victoria.com/a-look-at-react-hooks-useparams-for-dynamic-routing
  //Object { id: "b9123946" } donc rajouter l'id pour le pas prendre l'objet mais l'id
  //https://stackoverflow.com/questions/72004170/how-to-pass-id-in-route-react
  const ID = useParams("id").id;

  const LogementActuel = logements.find((logement) => logement.id === ID);
  if (!LogementActuel) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <Header />
      <section className="Logement">
        <div className="Slideshow">
          <Slideshow
            imagesLogementActuel={LogementActuel.pictures}
            id={LogementActuel.id}
          />
        </div>

        <h2 className="Logement__titre">{LogementActuel.title}</h2>
        <div className="Logement__ville">{LogementActuel.location}</div>

        <div className="Logement__tags">
          {LogementActuel.tags.map((tag) => {
            return (
              <div key={tag} className="tag">
                {tag}
              </div>
            );
          })}
        </div>

        <div className="Logement__hote">
          <div className="Logement__hoteidentite">
            {LogementActuel.host.name}
          </div>
          <img
            src={LogementActuel.host.picture}
            alt={LogementActuel.host.picture}
          />
        </div>
        <div className="Logement__etoiles">
          <Rates etoiles={LogementActuel.rating} />
        </div>
        <div className="Logement__collapse1">
          <Collapse titre="Description" detail={LogementActuel.description} />
        </div>
        <div className="Logement__collapse2">
          <Collapse titre="Équipements" detail={LogementActuel.equipments} />
        </div>
      </section>
      <Footer />
    </>
  );
}
