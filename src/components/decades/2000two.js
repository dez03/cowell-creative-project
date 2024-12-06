import React, { useState, useRef } from "react";

const Decade2000two = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-200);
        setOutcome(
          "Samuel spends weeks working tirelessly, earning gratitude but returning home exhausted and broke. Lose $200"
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-500);
        setOutcome("The money helps, but all you really did was lose $500.");
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(1500);
        setOutcome(
          "Samuel makes $1,500 in real estate, but his family calls him a sellout."
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
        2000s: Hurricane Katrina and Displacement
      </h2>
      <p className="text-gray-700 mb-4">
        In 2005, Hurricane Katrina devastated New Orleans. Samuel’s cousin lives
        there, and Samuel wants to help—but resources are scarce, and getting
        involved is risky.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Travel to New Orleans to volunteer and help his cousin rebuild.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Send money to his cousin instead of going.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Use the disaster to flip homes in the area and make a profit.
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

export default Decade2000two;
