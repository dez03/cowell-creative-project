import React, { useState, useRef } from "react";
import stayinAlive from "../assets/stayin_alive.mp3";
import wompSound from "../assets/womp.mp3"; // Import the death sound effect

const Decade1970 = ({ updateMoney, onNext, onRestart }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const stayinAliveAudio = useRef(new Audio(stayinAlive)); // Reference for the Stayin' Alive audio

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        stayinAliveAudio.current.pause();
        stayinAliveAudio.current.currentTime = 0; // Stop and reset the audio
        updateMoney(60); // Adds $60 to the current money
        setOutcome(
          "The vibes are reciprocated and Samuel successfully started a dance protest. Everyone made it into the club that night. Samuel was tipped $60."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "B": // DEATH
        setOutcome(
          "Samuel is caught as a fraudulent reporter and gets beaten by the bouncers. Congrats, you died."
        );
        setIsDead(true);
        setShowNextButton(false);

        // Play the womp sound effect when the user dies
        const audio = new Audio(wompSound);
        audio.play();
        break;
      case "C":
        updateMoney(-20); // Subtract $20 from the current money
        setOutcome(
          "Samuel gets let into the club, but has to pay a $20 entrance fee."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  const handleRestart = () => {
    // Reset all necessary states to their initial values
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
    onRestart(); // Call the restart function to reset global game state, like money
  };

  const handleMouseEnter = () => {
    stayinAliveAudio.current.currentTime = 0; // Reset to the beginning
    stayinAliveAudio.current.play();
  };

  const handleMouseLeave = () => {
    stayinAliveAudio.current.pause();
    stayinAliveAudio.current.currentTime = 0; // Reset to the beginning
  };

  return (
    <div>
      {/* Display the title and context regardless of the user's actions */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1970s: Disco Justice
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel witnesses the shady owner of the hottest disco club in town
        refusing to let people in based on their “vibes” (racial
        discrimination). Samuel decides it’s time to bring some funky justice to
        the dance floor.
      </p>

      {/* If outcome exists, only display the outcome text and buttons */}
      {outcome ? (
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
      ) : (
        // If no outcome yet, show the options to make a selection
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
      )}
    </div>
  );
};

export default Decade1970;
