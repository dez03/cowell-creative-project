import React, { useState } from "react";

const Decade1970 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-20); // Subtracts $20 from the current money
        setOutcome(
          "Samuel struggled to find steady employment and invested in a local business that failed, losing $20."
        );
        setShowNextButton(true);
        break;
      case "B":
        setOutcome(
          "Samuel joined a controversial political movement, which led to a violent crackdown by authorities. Tragically, he lost his life."
        ); // Death outcome
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "C":
        updateMoney(50); // Adds $50 to the current money
        setOutcome(
          "Samuel capitalized on the booming music industry by managing a rising soul artist, earning $50."
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
        1970s: Navigating a Changing Society
      </h2>
      <p className="text-gray-700 mb-4">
        The 1970s brought significant cultural and political shifts in America.
        Samuel, now middle-aged, must adapt to a rapidly changing world filled
        with opportunities and challenges. As society evolves, Samuel faces
        critical decisions that will determine his financial stability and
        legacy.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Adapting to a Changing Economy
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest in a local business to support economic growth.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Join a controversial political movement to fight for justice.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Manage a rising soul artist in the booming music industry.
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
              Continue to 1980s
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

export default Decade1970;
