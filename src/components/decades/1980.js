import React, { useState } from "react";

const Decade1980 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-40); // Subtracts $40 from the current money
        setOutcome(
          "Samuel attempted to start his own tech company during the early boom, but poor investments led to failure, costing him $40."
        );
        setShowNextButton(true);
        break;
      case "B":
        setOutcome(
          "Samuel became involved with the underground drug trade to make quick cash but was caught in a violent altercation and lost his life."
        ); // Death outcome
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "C":
        updateMoney(60); // Adds $60 to the current money
        setOutcome(
          "Samuel capitalized on the real estate boom, buying and selling properties for significant profit, earning $60."
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
        1980s: Thriving in a Time of Excess
      </h2>
      <p className="text-gray-700 mb-4">
        The 1980s were a time of wealth, technology, and cultural shifts. As
        greed and ambition shaped the decade, Samuel, now an experienced
        professional, must decide whether to embrace the risks or play it safe.
        Can he take advantage of the booming economy without losing everything?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Navigating the Boom of the 1980s
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Start a tech company to ride the early technology boom.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Engage in the underground drug trade for quick profits.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Invest in real estate during the property boom.
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
              Continue to 1990s
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

export default Decade1980;
