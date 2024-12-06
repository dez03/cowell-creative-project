import React, { useState } from "react";

const Decade2000 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(0); 
        setOutcome(
          "The world doesn’t end, and Samuel is stuck eating canned Tuna for the next five years. Samuel loses no money.");
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(1500); 
        setOutcome(
          "Samuel becomes the Jeff Bezos of survival kits, making $1,500 before the clock strikes midnight."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(-300);
        setOutcome(
          "The party is legendary, but Samuel gets fined $300 for noise complaints and damages."
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
        2000s: Y2K Panic!
      </h2>
      <p className="text-gray-700 mb-4">
        As the new millennium begins, everyone is losing their minds over the
        Y2K bug. Samuel, always one to think ahead, has to decide how to prepare
        for the apocalypse that may (or may not) come.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Stockpile canned food, water, and toilet paper in his basement.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Start selling “Y2K-proof” survival kits for $100 each.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Ignore the hype and throw a massive Y2K New Year’s Eve party.
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
              Continue in the 2000s
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

export default Decade2000;
