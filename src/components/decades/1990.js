import React, { useState } from "react";

const Decade1990 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-30); // Subtracts $30 from the current money
        setOutcome(
          "Samuel started a small tech business but underestimated the costs, losing $30 in expenses."
        );
        setShowNextButton(true);
        break;
      case "B":
        setOutcome(
          "Samuel got involved with a risky loan scheme that was fraudulent. Authorities caught up, and he was killed by angry investors."
        ); // Death outcome
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "C":
        updateMoney(70); // Adds $70 to the current money
        setOutcome(
          "Samuel took a job in the booming software industry, earning $70 as a skilled programmer."
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
        1990s: Riding the Wave of Innovation
      </h2>
      <p className="text-gray-700 mb-4">
        The 1990s saw the rise of the internet, globalization, and significant
        economic growth. Samuel, now an experienced professional, is presented
        with new opportunities in technology and finance. However, navigating
        these opportunities comes with risks. Will Samuel capitalize on the
        opportunities or fall victim to their challenges?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Navigating the Dot-Com Boom
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Start a small tech business in the emerging internet economy.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Get involved with a risky loan scheme to make quick cash.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Take a steady job in the booming software industry.
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
              Continue to 2000s
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

export default Decade1990;
