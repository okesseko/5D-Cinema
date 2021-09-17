import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./introduce.module.scss";
import autoprefixer from "autoprefixer";
const IMAGE_SRC = ["/the-flash.jpg", "/maze-runner.jpg", "/spider-man.jpg"];

const Introduce = () => {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const autoChangeImage = setInterval(() => {
      setImageIndex((imageIndex) => {
        if (imageIndex + 1 === IMAGE_SRC.length) return 0;
        else return imageIndex + 1;
      });
    }, 5000);
    return () => {
      clearInterval(autoChangeImage);
    };
  }, []);
  return (
    <div className={style.introduce}>
      <div className={style.carousel}>
        <div className={`${style.side_select} ${style.right}`}>
          <Image
            onClick={() => {
              if (imageIndex - 1 === -1) setImageIndex(IMAGE_SRC.length - 1);
              else setImageIndex(imageIndex - 1);
            }}
            src="/next_icon.svg"
            width={80}
            height={100}
          />
        </div>
        <Image src={IMAGE_SRC[imageIndex]} layout="fill" objectFit="cover" />
        <div className={`${style.side_select} ${style.left}`}>
          <Image
            onClick={() => {
              if (imageIndex + 1 === IMAGE_SRC.length) setImageIndex(0);
              else setImageIndex(imageIndex + 1);
            }}
            src="/next_icon.svg"
            width={80}
            height={100}
          />
        </div>
        <div className={style.bottom_dot}>
          {IMAGE_SRC.map((_, index) => (
            <span
              key={index}
              className={`${style.dot} ${
                imageIndex === index ? style.active : ""
              }`}
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduce;
