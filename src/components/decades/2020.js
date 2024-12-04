import React, { useState } from "react";

const Decade2020 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-50); // Subtract $50
        setOutcome(
          "Samuel started a small restaurant business during the pandemic, but lockdowns caused heavy losses, losing $50."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-70); // Subtract $70
        setOutcome(
          "Samuel invested in a travel agency at the start of the pandemic, but global travel restrictions caused a $70 loss."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(200); // Add $200
        setOutcome(
          "Samuel learned coding and started a remote freelance business, earning a remarkable $200."
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
        2020s: Adapting to a New Normal
      </h2>
      <p className="text-gray-700 mb-4">
        The 2020s have been marked by the pandemic, economic challenges, and a
        shift to remote work and digital innovation. Samuel must navigate these
        turbulent times and find ways to adapt. Will he make the right moves or
        face the consequences of risky choices?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Thriving Amid a Pandemic
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Start a small restaurant business despite the challenges.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest in a travel agency hoping for a rebound.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Learn coding and start a remote freelance business.
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
              End of the Game
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Decade2020;
