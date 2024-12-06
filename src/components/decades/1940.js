import React, { useState } from "react";
import wompSound from "../assets/womp.mp3"; // Import the sound effect

const Decade1940 = ({ updateMoney, onNext, onRestart }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(60); // Adds $60 to the current money
        setOutcome("Samuel gains valuable skills and earns $60.");
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "B":
        updateMoney(-30); // Removes $30 to the current money
        setOutcome(
          "Samuel manages to avoid the draft! But now has no work. Loses $30."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "C": // DEATH
        setOutcome(
          "Samuel is arrested and dies in custody due to excessive force."
        );
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

  const handleRestart = () => {
    // Reset all necessary states to their initial values
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
    onRestart(); // Call the restart function to reset global game state, like money
  };

  return (
    <div>
      {/* Display the title and context regardless of the user's actions */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1940s: World War II
      </h2>
      <p className="text-gray-700 mb-4">
        The United States enters World War II, leading to more opportunities for
        African Americans, particularly in the military. However, racial
        discrimination and segregation still exists.
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
              Continue to 1950s
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
      ) : (
        // If no outcome yet, show the options to make a selection
        <div>
          <p className="text-lg font-medium mb-4">
            Samuel must decide whether to enlist in the military.
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Enlist in the U.S. military and serve overseas.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invent a “Foolproof” anti-draft strategy to avoid getting drafted.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Protest against racial segregation in the military.
          </button>
        </div>
      )}
    </div>
  );
};

export default Decade1940;
