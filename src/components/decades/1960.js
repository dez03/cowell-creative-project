import React, { useState } from "react";

const Decade1960 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(50); // Adds $50 to the current money
        setOutcome(
          "Samuel joined the Civil Rights Movement and helped organize marches, receiving national recognition. He earned $50 through donations and speaking engagements."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-30); // Subtracts $30 from the current money
        setOutcome(
          "Samuel volunteered for the Vietnam War, hoping to find purpose and earn a steady income. However, he was injured in combat, losing $30 in medical expenses."
        );
        setShowNextButton(true);
        break;
      case "C":
        setOutcome(
          "Samuel decided to confront a local KKK chapter but was tragically killed during the confrontation. You died."
        ); // Set death message
        setIsDead(true);
        onDeath(); // Reset money to 100 in parent
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
        1960s: The Hippie Era and Space Race
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel finds himself at Woodstock, surrounded by music, peace, and love.
        A stranger approaches him and offers him a hit of LSD, promising an
        enlightening experience. What should Samuel do?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Take the LSD and join the stranger.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Politely decline and enjoy the music instead.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Walk away without saying anything.
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
              Continue in the 1960s
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

export default Decade1960;
