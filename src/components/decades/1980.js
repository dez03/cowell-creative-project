import React, { useState } from "react";
import wompSound from "../assets/womp.mp3"; // Import the death sound effect

const Decade1980 = ({ updateMoney, onNext, onRestart }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-150);
        setOutcome(
          "It’s pure cocaine. Samuel becomes addicted, blowing $150 for his next bump."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "B":
        updateMoney(2000);
        setOutcome(
          "Samuel manages to successfully sell all the dope, making him a well-known plug, and earns a serious bag! You earn $2000."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "C": // DEATH
        setOutcome(
          "Samuel turns the bag in to the police station, but is wrongfully convicted and spends the rest of his life behind bars. Samuel dies alone in prison."
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
        1980s: Say Nope to Dope
      </h2>
      <p className="text-gray-700 mb-4">
        The 1980s spark the War on Drugs, and Samuel gets swept up in the chaos.
        One day, while on a run (the secret to his longevity), he stumbles
        across a mysterious duffel bag left in an alley. He opens the bag,
        finding it packed with suspicious white powder.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Try the product to see what it is.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Take the bag home and start moving serious weight.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Turn it into the cops.
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
              Continue to 1990s
            </button>
          )}
          {isDead && (
            <button
              onClick={onRestart} // Directly calling the onRestart passed as prop
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

export default Decade1980;
