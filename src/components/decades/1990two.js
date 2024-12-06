import React, { useState } from "react";
import wompSound from "../assets/womp.mp3"; // Import the death sound effect

const Decade1990two = ({ updateMoney, onNext, onRestart }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A": // DEATH
        setOutcome(
          "Samuel interrupts the battle and gets booed out of the venue. He angered the wrong people and was shot in a drive-by shooting a week later."
        );
        setIsDead(true);
        setShowNextButton(false);

        // Play the womp sound effect when the user dies
        const audio = new Audio(wompSound);
        audio.play();
        break;
      case "B":
        updateMoney(0);
        setOutcome(
          "MC Hammer laughs at him off stage, but Samuel’s freestyle goes viral years later. He earns street cred but no money."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      case "C":
        updateMoney(3000);
        setOutcome(
          "Samuel crushes the audition and tours the world with MC Hammer. He’s now a minor celebrity, earning $3000 in profits."
        );
        setShowNextButton(true);
        setIsDead(false);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1990s: Hip-Hop Hype
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel finds himself in the heart of the 90s music scene. One day, he
        gets a flyer for MC Hammer’s backup dancer auditions. This could be his
        big break! But dancing in parachute pants is harder than it looks.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Skip the audition and crash a Tupac vs. Biggie rap battle to prove
            his skills.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Show up unprepared, wearing parachute pants two sizes too small, and
            try to freestyle rap instead.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Practice nonstop for weeks to try to land the role.
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
              Continue to the 2000s
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

export default Decade1990two;
