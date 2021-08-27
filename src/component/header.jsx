import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./header.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
      <ul>
        <Link href="/introduce">
          <li>影城介紹</li>
        </Link>
        <Link href="/movie">
          <li>所有電影</li>
        </Link>
        <Link href="/">
          <div className={style.image}>
            <Image width={442} height={105} src={"/logo.png"} />
          </div>
        </Link>
        <Link href="/reserve">
          <li>預約座艙</li>
        </Link>
        <Link href="/activity">
          <li>活動公告</li>
        </Link>
      </ul>
    </header>
  );
};
export default Header;
