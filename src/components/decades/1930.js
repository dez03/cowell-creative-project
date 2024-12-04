import React, { useState } from "react";

const Decade1930 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(40);
        setOutcome(
          "You worked as a Pullman porter on the railroad and earned $40."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-30);
        setOutcome(
          "You participated in a protest for fair wages, but the strike turned violent, leaving you injured and blacklisted. You lost $30."
        );
        setShowNextButton(true);
        break;
      case "C":
        setOutcome(
          "You attempted to rob a local bank but were caught and executed. You died."
        ); // Set the outcome first
        setIsDead(true); // Mark the user as dead
        onDeath(); // Reset money in the parent
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1930s: Surviving the Great Depression
      </h2>
      <p className="text-gray-700 mb-4">
        The 1930s brought the Great Depression, a time of widespread economic
        hardship and unemployment. Samuel, now a young adult, faces tough
        decisions to support himself and his community. With limited
        opportunities, he must navigate between survival, solidarity, and
        self-preservation. Will he find a way to thrive or fall victim to the
        struggles of the era?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Supporting Yourself During the Depression
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Work as a Pullman porter on the railroad.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Join a protest for fair wages and workers’ rights.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Attempt to rob a local bank for quick cash.
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
              Continue to 1940s
            </button>
          )}
          {isDead && (
            <button
              onClick={onDeath} // Calls parent restart logic
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

export default Decade1930;
