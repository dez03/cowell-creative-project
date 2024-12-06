import React, { useState } from "react";

const Decade1950 = ({ money, updateMoney, onDeath, onNext, onReset }) => {
  const [outcome, setOutcome] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [isDead, setIsDead] = useState(false);

  const handleChoice = (choice) => {
    switch (choice) {
      case "A":
        onDeath(); // Resets money to 100
        setOutcome(
          "Samuel challenges segregation by attending a whites-only establishment. Tragically, he is violently attacked and loses his life. You died."
        );
        setIsDead(true);
        break;
      case "B":
        updateMoney(-30); // Subtracts $30 from the current money
        setOutcome(
          "Samuel joins the Civil Rights Movement and organizes peaceful protests. Unfortunately, during one march, he is arrested, losing $30 in legal fees."
        );
        setShowNextButton(true);
        break;
      case "C":
        updateMoney(40); // Adds $40 to the current money
        setOutcome(
          "Samuel moves to the North and finds work in an industrial factory. Though the job is tough, he earns $40 and secures a stable future for his family."
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
        1950s: The Civil Rights Movement
      </h2>
      <p className="text-gray-700 mb-4">
        The Civil Rights Movement gains momentum, with African Americans
        demanding equal rights and an end to segregation.
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            Samuel must decide how to support the Civil Rights Movement.
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Stay in the South and fight segregation by dining in a
            whites-only resturant with his homeboys.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Join the Civil Rights Movement and organize peaceful protests alongside Dr. Martin Luther King Jr.
          </button>
          <button
            onClick={() => handleChoice("C")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded"
          >
            Move to the North and work in an industrial factory.
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
