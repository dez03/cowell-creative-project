import React, { useState } from "react";

const Decade2000 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-50); // Subtracts $50 from the current money
        setOutcome(
          "Samuel invested heavily in dot-com companies right before the crash, losing $50 as the bubble burst."
        );
        setShowNextButton(true);
        break;
      case "B":
        setOutcome(
          "Samuel worked in construction but ignored safety protocols to finish a project early. Tragically, an accident on-site cost him his life."
        ); // Death outcome
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "C":
        updateMoney(80); // Adds $80 to the current money
        setOutcome(
          "Samuel leveraged his knowledge of real estate to flip properties during the housing boom, earning $80."
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
        2000s: Navigating Uncertainty
      </h2>
      <p className="text-gray-700 mb-4">
        The 2000s brought economic highs and lows, with the dot-com bubble,
        housing market crash, and rapid globalization. Samuel, now a seasoned
        professional, faces critical decisions to secure his financial future.
        Will he take the right risks or fall victim to economic turbulence?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Navigating the Early 2000s Economy
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest heavily in dot-com companies during the tech boom.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Work in construction and cut corners to finish projects quickly.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Flip properties during the housing boom for quick profits.
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
              Continue to 2010s
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
