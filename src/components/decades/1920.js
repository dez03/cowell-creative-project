import React, { useState, useEffect } from "react";
import wompSound from "../assets/womp.mp3"; // Import the sound effect

const Decade1920 = ({ updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [isDrunk, setIsDrunk] = useState(false);
  const [scrambled, setScrambled] = useState(false);
  const [scrambledText, setScrambledText] = useState("");

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(50);
        setOutcome(
          "Samuel earns a steady income and builds a reputation, earning $50."
        );
        setShowNextButton(true);
        setIsDead(false);
        setIsDrunk(false);
        setScrambled(false);
        break;
      case "B":
        setIsDead(true); // Mark the player as dead
        setOutcome("Samuel stayed in the South and was lynched. Samuel died."); // Pass the death outcome

        // Play the womp sound effect when the user dies
        const audio = new Audio(wompSound);
        audio.play();

        setScrambled(false);
        setShowNextButton(false);

        // Call onDeath immediately to handle the death state in the parent
        onDeath("Samuel stayed in the South and was lynched. Samuel died.");
        break;
      case "C":
        updateMoney(-30);
        setOutcome(
          "Samuel is caught and fined for public intoxication and is now drunk!!! Fined $30."
        );
        setShowNextButton(true);
        setIsDrunk(true);
        setScrambled(true);
        setIsDead(false);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
        setScrambled(false);
    }
  };

  useEffect(() => {
    let interval;
    if (isDrunk) {
      interval = setInterval(() => {
        const button = document.getElementById("nextButton");
        if (button) {
          button.style.transform = `translate(${Math.random() * 100 - 5}px, ${
            Math.random() * 100 - 5
          }px)`;
        }
      }, 100);
    } else {
      const button = document.getElementById("nextButton");
      if (button) {
        button.style.transform = "translate(0, 0)";
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isDrunk]);

  useEffect(() => {
    let interval;
    if (scrambled) {
      interval = setInterval(() => {
        setScrambledText(scrambleText());
      }, 1000);
    } else {
      setScrambledText("");
    }

    return () => {
      clearInterval(interval);
    };
  }, [scrambled]);

  const scrambleText = () => {
    const textElements = [
      "1920s: The Harlem Renaissance, Prohibition, and Jazz 🎺",
      "The 1920s mark a time of cultural flourishing and systemic inequality. Samuel, a young Black man, must navigate opportunities in Harlem, systemic racism in the South, and the risks of Prohibition. Will he succeed or succumb to the challenges of the era?",
      "Samuel must decide how to seize opportunities during the Harlem Renaissance.",
      "Move to Harlem and begin performing at jazz clubs",
      "Stay in the South to help support his family.",
      "Try to start a bootlegging business illegally selling alcohol.",
      outcome,
    ];

    return textElements.map((text) =>
      text
        ? text
            .split("")
            .map((char) => {
              if (Math.random() < 0.1) {
                // 10% chance to scramble each letter
                const randomChar = String.fromCharCode(
                  97 + Math.floor(Math.random() * 26)
                );
                return randomChar;
              }
              return char;
            })
            .join("")
        : ""
    );
  };

  const scrambledTextElements = scrambleText();

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {scrambled
          ? scrambledTextElements[0]
          : "1920s: The Harlem Renaissance, Prohibition, and Jazz 🎺"}
      </h2>
      <p className="text-gray-700 mb-4">
        {scrambled
          ? scrambledTextElements[1]
          : "The 1920s mark a time of cultural flourishing and systemic inequality. Samuel, a young Black man, must navigate opportunities in Harlem, systemic racism in the South, and the risks of Prohibition. Will he succeed or succumb to the challenges of the era?"}
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            {scrambled
              ? scrambledTextElements[2]
              : "Samuel must decide how to seize opportunities during the Harlem Renaissance."}
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            {scrambled
              ? scrambledTextElements[3]
              : "Move to Harlem and begin performing at jazz clubs."}
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            {scrambled
              ? scrambledTextElements[4]
              : "Stay in the South to help support his family."}
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            {scrambled
              ? scrambledTextElements[5]
              : "Try to start a bootlegging business illegally selling alcohol."}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">
            {scrambled ? scrambledTextElements[6] : outcome}
          </p>
          {showNextButton && (
            <button
              id="nextButton"
              onClick={onNext}
              className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ${
                isDrunk ? "drunk-button" : ""
              }`}
            >
              Continue to 1930s
            </button>
          )}
          {isDead && (
            <button
              onClick={() =>
                onDeath(
                  "Samuel stayed in the South and was lynched. Samuel died."
                )
              }
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

export default Decade1920;
