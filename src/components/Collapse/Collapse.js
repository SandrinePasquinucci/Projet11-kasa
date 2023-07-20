import "./collapse.css";
//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-fr

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Collapse({ titre, detail }) {
  return (
    <div className="menuderoulant">
      <div className="menuderoulant">
        <p className="titre">{titre}</p>
        <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
        <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      </div>
      <p className="detail">{detail}</p>
    </div>
  );
}
