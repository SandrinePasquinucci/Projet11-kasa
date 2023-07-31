import "./collapse.css";
import "../../fontawesome.js";
import { useState } from "react";

//https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-fr

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Collapse({ page, titre, detail }) {
  const [isActive, setIsActive] = useState(false);

  function menuActif() {
    setIsActive(!isActive);
  }

  if (page === "Apropos") {
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
            <p className="detail">{detail}</p>
          </div>
        )}
      </div>
    );
  }
}
