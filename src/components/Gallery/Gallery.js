import "./gallery.css";
import logements from "../../datas/logements.json";
import Card from "../../components/Card/Card";

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => {
        return (
          <Card
            key={logement.id}
            href={logement.id}
            title={logement.title}
            src={logement.cover}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
