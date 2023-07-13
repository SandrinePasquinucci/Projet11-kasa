import "./header.css";
import { Link } from "react-router-dom";
import LogoKasa from "../../assets/LogoKasa.png";

function Header() {
  return (
    <header className="header">
      <h1>
        <img src={LogoKasa} alt="Kasa" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/Apropos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
