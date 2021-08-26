import React from "react";
import Image from "next/image";
import style from "./header.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <li>影城介紹</li>
        <li>所有電影</li>
        <div className={style.image}>
          <Image width={442} height={105} src={"/logo.png"} />
        </div>
        <li>預約座艙</li>
        <li>活動公告</li>
      </ul>
    </header>
  );
};
export default Header;
