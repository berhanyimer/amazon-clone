import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "../Carousel/carousel.module.css"
function CarouselEffect() {
  return (
    <>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          // Add the key prop here
          return (
            <img
              key={index}
              src={imageItemLink}
              alt={`carousel-item-${index}`}
            />
          );
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
}

export default CarouselEffect;
