import React, { useState } from "react";

const Decade1920 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(50);
        setOutcome("You moved to Harlem, found a community, and earned $50.");
        setShowNextButton(true);
        break;
      case "B":
        setIsDead(true); // Mark the player as dead
        onDeath("You stayed in the South and were lynched. You died."); // Pass the death outcome
        break;
      case "C":
        updateMoney(-30);
        setOutcome("You tried bootlegging but were caught and fined $30.");
        setShowNextButton(true);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1920s: The Harlem Renaissance
      </h2>
      <p className="text-gray-700 mb-4">
        The 1920s mark a time of cultural flourishing and systemic inequality.
        Samuel, a young Black man, must navigate opportunities in Harlem,
        systemic racism in the South, and the risks of Prohibition. Will he
        succeed or succumb to the challenges of the era?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Samuel must decide how to seize opportunities during the Harlem
            Renaissance.
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Move to Harlem and perform at local jazz clubs.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Stay in the South and work on a farm.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Try to start a bootlegging business.
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
              Continue to 1930s
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Decade1920;
