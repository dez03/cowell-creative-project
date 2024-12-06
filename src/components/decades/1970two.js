import React, { useState, useRef } from "react";
import stayinAlive from "../assets/stayin_alive.mp3";

const Decade1970 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const audioRef = useRef(new Audio(stayinAlive));

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-100); // Subtracts $100 from the current money
        setOutcome(
          "Samuel is caught mid-dump and gets sued for trespassing. Samuel loses $100 in court fees and gets banned from gardening stores for life."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(200);
        setOutcome(
          "The pesticide works surprisingly well, and local farmers start calling it “Samuel’s Spicy Savior.” He earns $200 and is nicknamed the “Hot Sauce Hero.”"
        ); 
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(50); // Adds $50 to the current money
        setOutcome(
          "Tragically, Samuel didn’t test the mixture well enough. It’s extremely toxic to humans, and Samuel dies."
        ); // Death outcome
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  const handleMouseEnter = () => {
    audioRef.current.currentTime = 0; // Reset to the beginning
    audioRef.current.play();
    document.body.classList.add("disco-effect");
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0; // Reset to the beginning
    document.body.classList.remove("disco-effect");
  };

  const handleRestart = () => {
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1970s: Environmental Revolution
      </h2>
      <p className="text-gray-700 mb-4">
        After reading Rachel Carson’s book "Silent Spring", Samuel becomes
        deeply concerned about pesticide use and environmental impact. Feeling
        inspired, he decides to take action.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Dump a bag of toxic fertilizer into the garden of a CEO of a
            chemical plant as a statement.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Create an organic pesticide made from hot sauce and garlic to sell
            at the farmers’ market.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Drink his homemade pesticide to prove it’s safe.
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
              Continue in the 1970s
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

export default Decade1970;
