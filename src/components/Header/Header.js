import "./header.css";
import { Link } from "react-router-dom";
import LogoKasa from "../../assets/LogoKasa.png";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function menuActif() {
    setIsActive(!isActive);
  }
  return (
    <header className="header">
      <h1>
        <img src={LogoKasa} alt="Kasa" />
      </h1>
      <nav>
        <ul>
          {isActive === false ? (
            <li>
              <Link
                to="/"
                className="lienaccueil"
                onClick={menuActif}
                style={{ textDecoration: "underline #ff6060" }}
              >
                Accueil
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/"
                className="lienaccueil"
                onClick={menuActif}
                style={{ textDecoration: "none" }}
              >
                Accueil
              </Link>
            </li>
          )}
          {isActive === false ? (
            <li>
              <Link
                to="/Apropos"
                className="lienapropos"
                onClick={menuActif}
                style={{ textDecoration: "none" }}
              >
                A propos
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/Apropos"
                className="lienapropos"
                onClick={menuActif}
                style={{ textDecoration: "underline #ff6060" }}
              >
                A propos
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
