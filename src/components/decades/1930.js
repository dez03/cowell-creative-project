import React, { useState } from "react";
import wompSound from "../assets/womp.mp3"; // Import the sound effect

const Decade1930 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A": // DEATH
        setOutcome(
          "Samuel gets hit by a train while working on the railroads and dies."
        );
        // Death outcome
        setIsDead(true);
        onDeath(
          "Samuel gets hit by a train while working on the railroads and dies."
        );

        // Play the womp sound effect when the user dies
        const audio = new Audio(wompSound);
        audio.play();
        break;
      case "B":
        updateMoney(-60);
        setOutcome(
          "The strike fails, and Samuel is blacklisted from all jobs in town losing him $60."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(500);
        setOutcome(
          "You attempted to rob a local bank and succeeded! You and your partner each got away with $500."
        );
        setShowNextButton(true);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1930s: The Great Depression
      </h2>
      <p className="text-gray-700 mb-4">
        The Great Depression hits the United States, leading to widespread
        economic hardship and social unrest. Samuel faces even greater
        challenges, like job discrimination and segregation.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            How should Samuel support himself?
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Work as a Pullman porter on trains.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Organize a strike for better wages.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Attempt to rob a bank with the sketchy dude down the block for quick
            cash.
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
              onClick={() => onDeath("Restarting the game...")}
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
