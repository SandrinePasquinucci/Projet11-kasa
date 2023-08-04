import "./rates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Rates({ etoiles }) {
  //Etoiles
  const EtoileRouge = Array.from({ length: etoiles }, (value, index) => index);
  const EtoileGrise = Array.from(
    { length: 5 - etoiles },
    (value, index) => index
  );

  return (
    <div className="etoile">
      {EtoileRouge.map((index) => {
        return (
          //Warning: Each child in a list should have a unique "key" prop.
          <FontAwesomeIcon
            key={index}
            icon="fa-solid fa-star star"
            style={{ color: "#ff6060" }}
          />
        );
      })}
      {EtoileGrise.map((index) => {
        return (
          <FontAwesomeIcon
            key={index}
            icon="fa-solid fa-star star"
            style={{ color: "#E3E3E3" }}
          />
        );
      })}
    </div>
  );
}
