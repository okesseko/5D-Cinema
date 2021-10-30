import React, { useState } from "react";
import style from "./reserve.module.scss";

const Reserve = () => {
  const [step, setStep] = useState(0);
  return (
    <div className={style.reserve}>
      <div className={style.figure} />
      <form className={style.form}>
        <label>
          姓名: <input type="text" name="name" />
        </label>
        <label>
          電子信箱: <input type="text" name="email" />
        </label>
        <label>
          電話: <input type="text" name="phone" />
        </label>
        <label>
          年齡: <input type="text" name="age" />
        </label>
        <button type="submit">下一步</button>
      </form>
      <ul className={style.stepper}>
        <li className={`${style.step} ${step === 0 && style["step--select"]}`}>
          <span>資料登記</span>
        </li>
        <li className={`${style.step} ${step === 1 && style["step--select"]}`}>
          <span>預約時間</span>
        </li>
        <li className={`${style.step} ${step === 2 && style["step--select"]}`}>
          <span>付款方式</span>
        </li>
        <li className={`${style.step} ${step === 3 && style["step--select"]}`}>
          <span>領舉票券</span>
        </li>
      </ul>
    </div>
  );
};

export default Reserve;
