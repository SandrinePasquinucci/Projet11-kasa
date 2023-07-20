import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ src, title, href }) {
  return (
    <Link to={`logement/${href}`} className="cardlink">
      <section className="card">
        <img src={src} alt={title} />
        <h2 className="cardtext">{title}</h2>
      </section>
    </Link>
  );
}
