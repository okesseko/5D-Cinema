import React, { useState } from "react";
import style from "./reserve.module.scss";
import FormStep from "./step/form";
import TimeStep from "./step/time";

const Reserve = () => {
  const [step, setStep] = useState(1);
  function nextStep() {
    setStep(step + 1);
  }
  function nowStep() {
    switch (step) {
      case 0:
        return <FormStep nextStep={nextStep} />;
      case 1:
        return <TimeStep />;
    }
  }
  return (
    <div className={style.reserve}>
      {nowStep()}
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
