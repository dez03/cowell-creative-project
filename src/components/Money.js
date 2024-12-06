// import React, { useEffect } from "react";
// import wompSound from "./assets/womp.mp3"; // Import the sound effect from the assets folder

// const Money = ({ amount }) => {
//   const colorClass =
//     amount > 0 ? "text-green-500" : amount < 0 ? "text-red-500" : "text-black";

//   useEffect(() => {
//     if (amount < 0) {
//       // Play womp womp womp sound effect when money goes below 0
//       const audio = new Audio(wompSound);
//       audio.play();
//     }
//   }, [amount]);

//   return (
//     <div className="text-lg font-bold">
//       Money: <span className={colorClass}>${amount}</span>
//     </div>
//   );
// };

// export default Money;

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