import React, { useState } from "react";

const Decade2010two = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-45);
        setOutcome("Samuel drives all night but barely covers gas money. Minus $45.");
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(300);
        setOutcome(
          "Samuel earns decent money but spends 12 hours a day editing logos for $5. Gains $300."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(3000);
        setOutcome(
          "The channel blows up, and Samuel becomes known as “The Chicken King,” landing a brand deal with Popeyes."
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
        2010s: The Gig Economy Grind
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel loses his job during the Great Recession but hears about this
        “gig economy” thing. It’s time to hustle and make ends meet.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Sign up to drive for Uber.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Become a freelance graphic designer on Fiverr.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Start his own YouTube channel reviewing chicken sandwiches.
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

export default Decade2010two;
