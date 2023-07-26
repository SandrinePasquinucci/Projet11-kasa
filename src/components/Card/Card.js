import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ src, title, href }) {
  return (
    <Link to={`logement/${href}`} className="cardlink">
      <img src={src} alt={title} className="cardimg"></img>
      <h2 className="cardtext">{title}</h2>
    </Link>
  );
}
