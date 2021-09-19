import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={style.header}>
      <ul>
        <Link href="/introduce">
          <li className={router.pathname === "/introduce" ? style.active : ""}>
            影城介紹
          </li>
        </Link>
        <Link href="/movie">
          <li className={router.pathname === "/movie" ? style.active : ""}>
            所有電影
          </li>
        </Link>
        <Link href="/">
          <div className={style.image}>
            <Image width={442} height={105} src={"/logo.png"} />
          </div>
        </Link>
        <Link href="/reserve">
          <li className={router.pathname === "/reserve" ? style.active : ""}>
            預約座艙
          </li>
        </Link>
        <Link href="/activity">
          <li className={router.pathname === "/activity" ? style.active : ""}>
            活動公告
          </li>
        </Link>
      </ul>
    </header>
  );
};
export default Header;
