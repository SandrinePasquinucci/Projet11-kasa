import "./header.css";
import { Link } from "react-router-dom";
import LogoKasa from "../../assets/LogoKasa.png";

export default function Header() {
  const pageactive = window.location.pathname;

  return (
    <header className="header">
      <h1>
        <img src={LogoKasa} alt="Kasa" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={pageactive === "/" ? "menuactif" : "menunonactif"}
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to="/Apropos"
              className={
                pageactive === "/Apropos" ? "menuactif" : "menunonactif"
              }
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
