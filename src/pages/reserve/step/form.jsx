import React, { useState } from "react";
import style from "../reserve.module.scss";

const FormStep = ({ nextStep }) => {
  const [armorStep, setArmorStep] = useState(0);
  const [formData, setFormData] = useState({
    name: null,
    emil: null,
    phone: null,
    age: null,
  });
  function formInputChange(e, key) {
    const newFormData = { ...formData, [key]: e.target.value };
    setFormData(newFormData);
    setArmorStep(Object.values(newFormData).filter((e) => e).length);
  }
  return (
    <>
      <div
        className={`${style.figure} ${
          armorStep ? style[`figure-${armorStep}`] : ""
        }`}
      />
      <form className={style.form}>
        <label>
          姓名:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              formInputChange(e, "name");
            }}
          />
        </label>
        <label>
          電子信箱:
          <input
            type="text"
            name="email"
            onChange={(e) => {
              formInputChange(e, "email");
            }}
          />
        </label>
        <label>
          電話:
          <input
            type="text"
            name="phone"
            onChange={(e) => {
              formInputChange(e, "phone");
            }}
          />
        </label>
        <label>
          年齡:
          <input
            type="text"
            name="age"
            onChange={(e) => {
              formInputChange(e, "age");
            }}
          />
        </label>
        <button
          type="button"
          onClick={(e) => {
            if (Object.values(formData).filter((e) => e).length === 4) {
              nextStep();
            }
          }}
        >
          下一步
        </button>
      </form>
    </>
  );
};

export default FormStep;
