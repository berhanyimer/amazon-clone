import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data"; // Assuming img is an array of image URLs
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Header/Header.module.css"; // Fixed the import path

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showArrows={true}
      >
        {img.map((imageItemLink, index) => {
          // Use img array and add an index for the key
          return <img key={index} src={imageItemLink} alt={`Slide ${index}`} />;
        })}
      </Carousel>
      <div className={`${classes.hero_img}`}></div>
    </div>
  );
}

export default CarouselEffect;
