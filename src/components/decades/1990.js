import React, { useState } from "react";
import wompSound from "../assets/womp.mp3"; // Import the death sound effect

const Decade1990 = ({ updateMoney, onNext, onRestart }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-300);
        setOutcome(
          "The company skyrockets… and crashes within weeks. Samuel loses $300, but gets a free pet bowl as compensation."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "B":
        updateMoney(500);
        setOutcome(
          "It’s a hit! By the end of the year, Samuel is known as the “Black Dr. Phil” and makes a profit of $500."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "C": // DEATH
        setOutcome(
          "Samuel tries living the thug life, but gets caught up in gun fire while filming a music video and dies."
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
        1990s: The Dot Com Boom
      </h2>
      <p className="text-gray-700 mb-4">
        The 1990s brought a wave of new opportunities with the rise of the
        internet, but also some truly bizarre business ideas. One day, while
        flipping through late-night TV ads, Samuel sees a commercial for a
        “groundbreaking” dot-com startup looking for investors. It promises to
        change the world… or at least deliver pet food to your doorstep. Samuel
        smells opportunity.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest all his savings into the startup, Pets.com.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Start his own website selling “Samuel’s Life Tips” for $5 per
            subscription.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Ignore the internet hype and look into starting a Hip-Hop career.
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
              Continue in the 1990s
            </button>
          )}
          {isDead && (
            <button
              onClick={onRestart} // Directly call the onRestart prop to reset state
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

export default Decade1990;
