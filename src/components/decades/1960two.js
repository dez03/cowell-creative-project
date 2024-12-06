import React, { useState } from "react";

const Decade1970two = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-20); // Adds $50 to the current money
        setOutcome(
          "Samuel tried sneaking into a junkyard, but was caught and fined $20 dollars. Samuel never made the rocket."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(250); // Subtracts $30 from the current money
        setOutcome(
          "Samuel finds the blueprints and steals them! Miraculously, he wasn’t caught and managed to sell the blueprints in a local black market, making him $250"
        );
        setShowNextButton(true);
        break;
      case "C":
        setOutcome("No one likes a crazy person. Samuel dies."); // Set death message
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
        Samuel, inspired by the moon landing hype, decides he’s got what it
        takes to join the space race. But NASA doesn’t respond to his
        handwritten application, so he takes matters into his own hands.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">Does Samuel</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Build a rocket out of lawnmower parts and fireworks.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Sneak into NASA disguised as a janitor to “borrow” blueprints.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Start a conspiracy theory about how the moon landing is fake.
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
              Continue to 1970s
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

export default Decade1970two;
