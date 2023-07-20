import "./banner.css";

export default function Banner({ texte, image }) {
  return (
    <section className="banner">
      <img alt="" src={image} className="bannerimage" />

      <h2 className="bannertitre">{texte}</h2>
    </section>
  );
}
