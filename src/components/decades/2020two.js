import React, { useState } from "react";

const Decade2020two = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(500);
        setOutcome(
          "Samuel becomes a viral TikTok sensation, but his apartment smells like yeast for weeks. +$500 from ad revenue."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-1000);
        setOutcome(
          "The coin skyrockets, making Samuel a small fortune—until he forgets to sell, and it all crashes. He loses $1,000"
        );
        setShowNextButton(true);
        break;
      case "C": 
      updateMoney(-750);
        setOutcome(
          "Suprisingly, Samuel didn't catch COVID, and threw some fun house parties, but lost $750 on decorations and drinks."
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
        2020s: Pandemic Pandemonium
      </h2>
      <p className="text-gray-700 mb-4">
        In 2020, the world shuts down due to COVID-19. Samuel, like everyone
        else, is stuck at home and looking for ways to cope with the chaos.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Start baking sourdough bread and filming TikToks.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest his stimulus check in Dogecoin.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Refuse to wear a mask and host house parties.
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
              End of the Game
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Decade2020two;
