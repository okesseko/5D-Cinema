import React from "react";
import style from "./reserve.module.scss";

const Reserve = () => {
  return (
    <div className={style.reserve}>
      <div className={style.figure} />
      <form className={style.form}></form>
      <ul className={style.stepper}></ul>
    </div>
  );
};

export default Reserve;
