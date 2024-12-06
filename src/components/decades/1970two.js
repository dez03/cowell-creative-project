import React, { useState } from "react";
import wompSound from "../assets/womp.mp3"; // Import the death sound effect

const Decade1970two = ({ updateMoney, onNext, onRestart }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-100); // Subtracts $100 from the current money
        setOutcome(
          "Samuel is caught mid-dump and gets sued for trespassing. Samuel loses $100 in court fees and gets banned from gardening stores for life."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "B":
        updateMoney(200);
        setOutcome(
          "The pesticide works surprisingly well, and local farmers start calling it “Samuel’s Spicy Savior.” He earns $200 and is nicknamed the “Hot Sauce Hero.”"
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "C": // DEATH
        setOutcome(
          "Tragically, Samuel didn’t test the mixture well enough. It’s extremely toxic to humans, and Samuel dies."
        ); // Death outcome
        setIsDead(true);
        setShowNextButton(false);

        // Play the womp sound effect when the user dies
        const audio = new Audio(wompSound);
        audio.play();
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1970s: Environmental Revolution
      </h2>
      <p className="text-gray-700 mb-4">
        After reading Rachel Carson’s book "Silent Spring", Samuel becomes
        deeply concerned about pesticide use and environmental impact. Feeling
        inspired, he decides to take action.
      </p>

      {/* If outcome exists, only display the outcome text and buttons */}
      {outcome ? (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">{outcome}</p>
          {showNextButton && (
            <button
              onClick={onNext}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Continue to the 1980s
            </button>
          )}
          {isDead && (
            <button
              onClick={onRestart}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Start again from the 1920s
            </button>
          )}
        </div>
      ) : (
        // If no outcome yet, show the options to make a selection
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Dump a bag of toxic fertilizer into the garden of a CEO of a
            chemical plant as a statement.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Create an organic pesticide made from hot sauce and garlic to sell
            at the farmers’ market.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Drink his homemade pesticide to prove it’s safe.
          </button>
        </div>
      )}
    </div>
  );
};

export default Decade1970two;
