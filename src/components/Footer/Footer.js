import "./footer.css";
import FooterKasa from "../../assets/FooterKasa.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={FooterKasa} alt="Kasa" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
