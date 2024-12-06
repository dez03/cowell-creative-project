import React, { useState } from "react";

const Decade1950 = ({ money, updateMoney, onDeath, onNext, onReset }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        updateMoney(-50);
        setOutcome(
          "Samuel invests his hard-earned money into the scheme and tries to recruit others, but it turns out to be a pyramid scheme. The people he recruited are angry, and Samuel ends up losing $50."
        );
        setShowNextButton(true);
        break;
      case "B":
        updateMoney(80); // Adds $80 from the current money
        setOutcome(
          "Samuel decides that the offer sounds too good to be true. He finds a part-time job instead, earning a reliable income. +$80."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(-80); // Subtracts 80 to the current money
        setOutcome(
          "Samuel ignores the offer and buys himself a new suit. He doesn't lose any money to scams, but now he's broke. At least he looked sharp! He loses $80."
        );
        setShowNextButton(true);
        break;
      default:
        setOutcome("An unexpected error occurred. Please try again.");
    }
  };

  const handleRestart = () => {
    onReset(); // Reset money to 100
    setOutcome(null);
    setShowNextButton(false);
    setIsDead(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        1950s: The Post-War Boom
      </h2>
      <p className="text-gray-700 mb-4">
        Samuel comes across an opportunity to earn extra money by investing in a
        company selling the latest home appliances. They promise him that, if he
        recruits a few more people, he can make a small fortune.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">What should Samuel do?</p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest in the company and recruit others.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Angrily decline and look for a steady job.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Ignore the offer and buy a new suit so he can organize a sit-in in
            the hottest white only steakhouse in town.
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
              Continue to 1960s
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

export default Decade1950;
