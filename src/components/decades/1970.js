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
        updateMoney(60); // Subtracts $20 from the current money
        setOutcome(
          "The vibes are reciprocated and Samuel successfully started a dance protest. Everyone made it into the club that night. Samuel was tipped $60"
        );
        setShowNextButton(true);
        break;
      case "B":
        setOutcome(
          "Samuel is caught as a fraudulent reporter and gets beaten by the bouncers. Congrats, you died."
        ); // Death outcome
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "C":
        updateMoney(-20); // Adds $50 to the current money
        setOutcome(
          "Samuel gets let into the club, but has to pay a $20 entrance fee."
        );
        setShowNextButton(true);
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
        1970s: Disco Justice
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel witnesses the shady owner of the hottest disco club in town
        refusing to let people in based on their “vibes” (racial
        discrimination). Samuel decides it’s time to bring some funky justice to
        the dance floor.
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
            Sneak in with a boombox blasting “Stayin’ Alive” and start an
            impromptu dance protest.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Expose the owner’s shady dealings by pretending to be an undercover
            reporter for Rolling Stone.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Change into a flashy outfit in hopes you won’t be profiled due to
            your swag.
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
