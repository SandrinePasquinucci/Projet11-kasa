import "./error.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Error() {
  return (
    <>
      <Header />
      <section className="page404">
        <h3 className="Erreur404">404</h3>
        <div className="MessageErreur">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <Link className="RetourAccueil" to="/">
          Retourner sur la page d'accueil
        </Link>
      </section>
      <Footer />
    </>
  );
}
