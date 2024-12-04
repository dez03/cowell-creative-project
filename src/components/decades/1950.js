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
        1950s: Battling Segregation and Embracing Opportunities
      </h2>
      <p className="text-gray-700 mb-4">
        The 1950s were marked by the fight for civil rights, widespread
        segregation, and limited opportunities for Black Americans. Samuel, now
        a father, strives to provide for his family and protect them from the
        harsh realities of systemic racism. As the Civil Rights Movement begins
        to gain momentum, Samuel faces critical decisions that could shape his
        and his family’s future. Will he find a way to prosper or fall victim to
        the obstacles of the era?
      </p>

      {!outcome ? (
        <div>
          <p className="text-lg font-medium mb-4">
            How should Samuel navigate the challenges of the 1950s to secure a
            better future for his family?
          </p>
          <button
            onClick={() => handleChoice("A")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Stay in the South and challenge segregation by attending a
            whites-only establishment.
          </button>
          <button
            onClick={() => handleChoice("B")}
            className="block w-full text-left px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 rounded mb-2"
          >
            Join the Civil Rights Movement and organize peaceful protests.
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
