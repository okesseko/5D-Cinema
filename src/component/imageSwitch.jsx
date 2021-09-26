import React, { useState } from "react";
import style from "./imageSwitch.module.scss";

const ImageSwitch = ({ images, carouselStyle = "", imageStyle = "" }) => {
  const [imageSwitch, setImageSwitch] = useState(0);
  return (
    <div className={`${style.carousel} ${carouselStyle}`}>
      {images.map((image, index) => {
        if (typeof image === "string")
          return (
            <img
              className={`${style.image} ${
                imageSwitch === index ? "" : style.back
              } ${imageStyle}`}
              src={images[index]}
            />
          );
        return (
          <div
            className={`${style.image} ${
              imageSwitch === index ? "" : style.back
            } ${imageStyle}`}
          >
            {image}
          </div>
        );
      })}
      <div className={style.bottom_dot}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${
              imageSwitch === index ? style.active : ""
            }`}
            onClick={() => {
              setImageSwitch(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSwitch;
