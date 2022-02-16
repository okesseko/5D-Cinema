import React, { useState } from "react";
import style from "./introduce.module.scss";
import Image from "../../component/image";
const IMAGE_SRC = [
  ["/introduce-about1.png", "/introduce-about2.png"],
  ["/introduce-env1.png", "/introduce-env2.png"],
];

const ARTICLE = [
  "FIVEDM是全台首家沉浸式電影院\n以5D技術帶給您身歷其境感受\n彷彿置身於電影中\n擁有傳統電影院無法提供的極致感受\n\n地址：台北市信義區信義路五段7號98樓\n\n電話：02-1234567",
  "從德國引進,最新的5D座艙\n採用xled、杜比40、sMell等最新技術\n能根據電影給予觀影者最直觀的五感刺激",
];

const Introduce = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [imageSwitch, setImageSwitch] = useState(0);
  function handleButton(index) {
    setSelectedButton(index);
    setImageSwitch(0);
  }
  return (
    <div className={style.introduce}>
      <div className={style.buttonGroup}>
        <button
          className={selectedButton === 1 ? style.select : ""}
          onClick={() => handleButton(1)}
        >
          關於影城
        </button>
        <button
          className={selectedButton === 2 ? style.select : ""}
          onClick={() => handleButton(2)}
        >
          環境介紹
        </button>
        <button
          className={selectedButton === 3 ? style.select : ""}
          onClick={() => handleButton(3)}
        >
          票價說明
        </button>
      </div>
      {selectedButton !== 3 ? (
        <div className={style.imageWithArticle}>
          <div className={style.carousel}>
            <img
              className={`${style.image} ${
                imageSwitch === 0 ? "" : style.back
              }`}
              src={IMAGE_SRC[selectedButton - 1][0]}
            />
            <img
              className={`${style.image} ${
                imageSwitch === 1 ? "" : style.back
              }`}
              src={IMAGE_SRC[selectedButton - 1][1]}
            />
            <div className={style.bottom_dot}>
              <span
                className={`${style.dot} ${
                  imageSwitch === 0 ? style.active : ""
                }`}
                onClick={() => {
                  setImageSwitch(0);
                }}
              />
              <span
                className={`${style.dot} ${
                  imageSwitch === 1 ? style.active : ""
                }`}
                onClick={() => {
                  setImageSwitch(1);
                }}
              />
            </div>
          </div>
          <article className={style.article}>
            <Image src="/introduce.svg" width={100} height={20} />
            <p>{ARTICLE[selectedButton - 1]}</p>
          </article>
        </div>
      ) : (
        <div className={style.price}>
          <div className={style.price_intro}>
            <Image src="/price1.png" width={200} height={200} />
            <h2>全票 NT$700</h2>
            <p>
              一般成人與孩童
              <br />
              請選擇全票
            </p>
          </div>
          <div className={style.price_intro}>
            <Image src="/price2.png" width={200} height={200} />
            <h2>早場 NT$600</h2>
            <p>
              23:00~08:00觀看
              <br />
              可享早場優惠
            </p>
          </div>
          <div className={style.price_intro}>
            <Image src="/price3.png" width={200} height={200} />
            <h2>愛心 NT$350</h2>
            <p>
              持身心障礙手冊者和一位陪同
              <br />
              可享愛心票價
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Introduce;
