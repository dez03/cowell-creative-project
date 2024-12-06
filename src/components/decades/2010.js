import React, { useState } from "react";

const Decade2010 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(0);
        setOutcome(
          "The post gets some likes, but his old high school friends leave ignorant comments. Samuel loses no money."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(-500);
        setOutcome(
          "The protest is a huge success, and Samuel becomes a respected community leader—but he spends $500 on permits and supplies."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(0);
        setOutcome(
          "Samuel keeps his peace, but his friends accuse him of not standing up for what’s right. Samuel loses no money."
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
        2010s: The Rise of Social Media Activism
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel sees everyone on Twitter using hashtags like #BlackLivesMatter to
        call for change. He wants to support the movement, but he’s unsure how
        to make the most impact.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Share a heartfelt post on Instagram about the importance of
            equality.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Organize a local protest and march in his city.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Stay silent and avoid controversy.
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
              Continue in the 2010s
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

export default Decade2010;
