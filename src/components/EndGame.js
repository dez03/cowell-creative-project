import React from "react";

const EndGame = ({ money, onRestart }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">
        Congratulations!
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        You’ve successfully navigated Samuel’s journey through history.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Total Money Earned:{" "}
        <span
          className={
            money > 0
              ? "text-green-600 font-bold"
              : money < 0
              ? "text-red-600 font-bold"
              : "text-black font-bold"
          }
        >
          ${money}
        </span>
      </p>
      <button
        onClick={onRestart}
        className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default EndGame;
