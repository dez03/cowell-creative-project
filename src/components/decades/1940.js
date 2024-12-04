import React, { useState } from "react";

const Decade1930 = ({ money, updateMoney, onDeath, onNext, onReset }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(50); // Adds $40 to the current money
        setOutcome(
          "Samuel serves with honor but faces racism both in the military and when returning home. Despite this, he earns a modest military pension. +$50"
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(30); // Subtracts $30 from the current money
        setOutcome(
          "Samuel finds stable employment and earns a good income. However, the factory conditions are harsh, and an injury reduces his earnings. +$30"
        );
        setShowNextButton(true);
        break;
      case "C":
        onDeath(); // Resets money to 100
        setOutcome(
          "Samuel is arrested for defying the government and organizing protests. He loses his savings and is ostracized by his community causing an untimely death. "
        );
        setIsDead(true);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  const handleRestart = () => {
    onReset(); // Reset money to 100
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1940s: Fighting for Freedom and Opportunity
      </h2>
      <p className="text-gray-700 mb-4">
        The 1940s were defined by World War II and the fight for civil rights at
        home. Samuel, now a middle-aged man, faces a world at war and a country
        grappling with racial inequality. As African Americans are called to
        support the war effort, Samuel must decide how best to contribute to his
        family, his community, and his country. Will he seize opportunities in a
        changing world or face the harsh realities of systemic racism?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            How should Samuel contribute to his family and country during this
            turbulent time?
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
            Work in a wartime factory producing weapons and supplies.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Refuse to support the war effort and focus on local activism.
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
      )}
    </div>
  );
};

export default Decade1930;
