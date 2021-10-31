import React from "react";

const TimeStep = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <p>預約日期</p>
          <input id="date" type="date" />
        </div>
        <div>
          <p>預約時間</p>
          <div>
            <select className="w-12">
              {(new Array(24)).map((_, index) => {
                console.log(index);
                return (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            時
            <select className="w-12">
              {(new Array(60)).map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            分
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeStep;
