import React, { useState, useRef } from "react";

const Decade2000three = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-500);
        setOutcome(
          "His page gets millions of views, but Tom from MySpace sues him $500 for using copyrighted music."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(0);
        setOutcome("Nothing happens. Samuel just avoids social media.");
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(300);
        setOutcome(
          "Samuel’s MySpace page doesn’t go viral, but he lands a stable office job through his connections. Gaining him $300."
        );
        setShowNextButton(true);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  const handleRestart = () => {
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        2000s: MySpace Madness
      </h2>
      <p className="text-gray-700 mb-4">
        Social media is taking over, and Samuel creates a MySpace page to stay
        relevant. But building the perfect profile is harder than it looks.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Spend hours coding a flashy MySpace layout with glittery GIFs and
            autoplay music.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Stay off MySpace. Social Media is overrated anyways.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Keep it simple with a professional photo and a heartfelt bio.
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">{outcome}</p>
          {showNextButton && (
            <button
              onClick={onNext}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Continue to the 2010s
            </button>
          )}
          {isDead && (
            <button
              onClick={handleRestart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Start again from the 1920s
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Decade2000three;
