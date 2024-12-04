// money.js code
import React from "react";

const Money = ({ amount }) => {
  const colorClass =
    amount > 0 ? "text-green-500" : amount < 0 ? "text-red-500" : "text-black";

  return (
    <div className="text-lg font-bold">
      Money: <span className={colorClass}>${amount}</span>
    </div>
  );
};

export default Money;
