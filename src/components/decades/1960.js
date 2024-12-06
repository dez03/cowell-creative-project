import React, { useState, useEffect } from "react";

const Decade1960 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [lsdEffect, setLsdEffect] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-70); // Subtracts $70 from the current money
        setOutcome(
          "Samuel decides to take the LSD. His experience is wild and disorienting, and at the peak of his trip, he becomes convinced he can beat the Soviets in the Space Race if he has his own rocket. He ends up buying a backyard 'rocket' from a guy down the road, losing $70 in the process. He’s back to reality the next day, but his wallet is lighter, and all he has is a pile of scrap metal."
        );
        setShowNextButton(true);
        setLsdEffect(true); // Trigger the LSD effect
        break;
      case "B":
        updateMoney(-10); // Subtracts $10 from the current money
        setOutcome(
          "Samuel declines the offer, deciding he'd rather stay clear-headed to take in the incredible music and atmosphere. He enjoys the rest of Woodstock, spending $10 on some food."
        );
        setShowNextButton(true);
        setLsdEffect(false);
        break;
      case "C":
        updateMoney(0);
        setOutcome(
          "Samuel quietly walks away without engaging. He feels a little out of place for a moment, but eventually finds a good spot to sit and relax. He ends up having a great time enjoying the music and people-watching. His money stays the same."
        );
        setShowNextButton(true);
        setLsdEffect(false);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
        setLsdEffect(false);
    }
  };

  const handleRestart = () => {
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
    setLsdEffect(false);
  };

  return (
    <div className={lsdEffect ? "lsd-effect" : ""}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1960s: The Hippie Era and Space Race
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel finds himself at Woodstock, surrounded by music, peace, and love.
        A stranger approaches him and offers him a hit of LSD, promising an
        enlightening experience. What should Samuel do?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Take the LSD and join the stranger.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Politely decline and enjoy the music instead.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Walk away without saying anything.
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
              Continue in the 1960s
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

export default Decade1960;
