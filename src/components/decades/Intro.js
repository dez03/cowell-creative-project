import React from "react";

const Intro = ({ onNext }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Instructions for the Game
      </h2>
      <p className="text-gray-700 mb-4">
        In this interactive game, you will guide Samuel, a fictional Black man,
        through pivotal moments in American history. Each decade presents
        challenges, opportunities, and decisions that shape Samuel’s life. Your
        goal is to maximize Samuel’s money while navigating systemic challenges.
      </p>
      <p className="text-gray-700 mb-4">
        Be cautious: some choices may lead to financial losses or even Samuel’s
        death. If Samuel dies, you’ll restart from the 1920s with $100. Choose
        wisely, and good luck!
      </p>
      <button
        onClick={onNext}
        className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Start the Journey
      </button>
    </div>
  );
};

export default Intro;
