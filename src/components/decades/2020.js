import React, { useState } from "react";

const Decade2020 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(0); 
        setOutcome(
          "The officer lets Samuel go with a warning but takes his time “searching” the car. Samuel was late to work the next day. Samuel lost no money."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-500);
        setOutcome(
          "The situation escalates, and Samuel ends up with a hefty ticket for “resisting.” Samuel loses $500."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(-300);
        setOutcome(
          "The video goes viral, sparking outrage and support for Samuel, but also hate mail and harassment. Minus $300 because his car was keyed. "
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
        2020s: Racial Profiling at Its Finest
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel gets pulled over while driving home from work one evening. He
        knows he did nothing wrong, but the officer seems to have other ideas.
        Samuel has to think fast.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Politely comply and hope for the best.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Speak up and ask why he’s being pulled over.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Use his phone to record the interaction.
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
              Continue to the 2020s
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

export default Decade2020;
