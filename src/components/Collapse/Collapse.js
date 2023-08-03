import "./collapse.css";
import { useState } from "react";

//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-fr

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Collapse({ titre, detail }) {
  const [isActive, setIsActive] = useState(false);

  function menuActif() {
    setIsActive(!isActive);
  }

  return (
    <div className="menuderoulant">
      {isActive === false ? (
        <div className="menuferme">
          <div className="titre" onClick={menuActif}>
            {titre}

            <FontAwesomeIcon
              icon="fa-solid fa-chevron-down"
              style={{ color: "white" }}
            />
          </div>
        </div>
      ) : (
        <div className="menuouvert">
          <div className="titre" onClick={menuActif}>
            {titre}

            <FontAwesomeIcon
              icon="fa-solid fa-chevron-up"
              style={{ color: "white" }}
            />
          </div>
          <div className="detail">
            {Array.isArray(detail)
              ? detail.map((item) => {
                  return <div key={titre + item}>{item}</div>;
                })
              : detail}
          </div>
        </div>
      )}
    </div>
  );
}
