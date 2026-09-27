import { useEffect, useState } from "react";
import heroCSS from "./Hero.module.css";

import destination01 from "../assets/Destination01.jpg";
import destination02 from "../assets/Destination02.jpg";
import destination03 from "../assets/Destination03.jpg";
import destination04 from "../assets/Destination04.jpg";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    destination01,
    destination02,
    destination03,
    destination04,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={heroCSS.hero_wrapper}>

      {/* Images */}
      <div className={heroCSS.hero_images}>
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Travel destination"
            className={`${heroCSS.hero_image} ${
              index === currentImage ? heroCSS.active : ""
            }`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className={heroCSS.overlay}></div>

      {/* Hero text */}
      <div className={heroCSS.hero_content}>
        <h1>
          Explore The World,
          <br />
          One Unforgettable Journey
        </h1>
      </div>

    </section>
  );
}

export default Hero;