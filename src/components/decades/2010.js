import React, { useState } from "react";

const Decade2010 = ({ money, updateMoney, onDeath, onNext }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        setOutcome(
          "Samuel joined a startup in Silicon Valley but was overworked, underpaid, and eventually suffered a fatal stress-induced heart attack."
        );
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "B":
        setOutcome(
          "Samuel fell victim to a scam while trying to invest in cryptocurrency. He lost his life confronting the scammers."
        );
        setIsDead(true);
        onDeath(); // Reset money in the parent
        break;
      case "C":
        updateMoney(100); // Adds $100 to the current money
        setOutcome(
          "Samuel became a consultant for a tech company and leveraged his expertise to earn $100."
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
        2010s: The Era of Innovation and Uncertainty
      </h2>
      <p className="text-gray-700 mb-4">
        The 2010s were marked by rapid technological advancements and societal
        shifts. Samuel, now a seasoned professional, must decide how to adapt to
        an increasingly digital and volatile world. Will he take the right risks
        or fall victim to unforeseen challenges?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Scenario 1: Navigating the Digital Revolution
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Join a startup in Silicon Valley for career growth.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Invest in cryptocurrency and aim for quick profits.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Become a consultant for a tech company.
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
              Continue to 2020s
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
