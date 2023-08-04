import "./slideshow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import logements from "../../datas/logements.json";

export default function Slideshow({ id }) {
  const [imageSlider, setImageSlider] = useState([]);
  useEffect(() => {
    const imageActuelle = logements.filter((data) => data.id === id);
    setImageSlider(imageActuelle[0].pictures);
  }, [id]);

  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    if (slideIndex <= 0) {
      setSlideIndex(imageSlider.length - 1);
      return;
    }
    setSlideIndex(slideIndex - 1);
  };

  const nextSlide = () => {
    if (slideIndex >= imageSlider.length - 1) {
      setSlideIndex(0);
      return;
    }
    setSlideIndex(slideIndex + 1);
  };

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[slideIndex]})` }}
      className="slideshow"
    >
      <FontAwesomeIcon
        icon="fa-solid fa-chevron-left prevSlide"
        style={{ color: "white" }}
        onClick={prevSlide}
      />

      <FontAwesomeIcon
        icon="fa-solid fa-chevron-right nextSlide"
        style={{ color: "white" }}
        onClick={nextSlide}
      />
    </section>
  );
}
