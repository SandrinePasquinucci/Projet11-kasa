import "./slideshow.css";

export default function Slideshow({ image }) {
  return (
    <section className="slideshow">
      <img src={image} alt={image} className="image"></img>
    </section>
  );
}
