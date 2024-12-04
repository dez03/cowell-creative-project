import React, { useState } from "react";
import Money from "../components/Money";
import Decade1920 from "../components/decades/1920";
import Decade1930 from "../components/decades/1930";
import Decade1940 from "../components/decades/1940";
import Decade1950 from "../components/decades/1950";
import Decade1960 from "../components/decades/1960";
import Decade1970 from "../components/decades/1970";
import Decade1980 from "../components/decades/1980";
import Decade1990 from "../components/decades/1990";
import Decade2000 from "../components/decades/2000";
import Decade2010 from "../components/decades/2010";
import Decade2020 from "../components/decades/2020";
import EndGame from "../components/EndGame";

const Home = () => {
  const [money, setMoney] = useState(100); // Initial money state
  const [currentDecade, setCurrentDecade] = useState(null); // Tracks the active decade
  const [isDead, setIsDead] = useState(false); // Tracks if the player has died
  const [outcome, setOutcome] = useState(""); // Stores the current outcome message

  const updateMoney = (amount) => {
    setMoney((prevMoney) => prevMoney + amount); // Adjust money based on choices
  };

  const handleDeath = (deathOutcome) => {
    setIsDead(true); // Mark the player as dead
    setOutcome(deathOutcome); // Store the death outcome
    setMoney(100); // Reset money to 100
  };


  const handleRestart = () => {
    setMoney(100); // Reset money to $100
    setCurrentDecade("1920s"); // Restart the game at 1920s
    setIsDead(false); // Reset death status
    setOutcome(""); // Clear the outcome message
  };

  const renderDecade = () => {
    if (isDead) {
      return (
        <div>
          <p className="text-gray-700 mb-4">{outcome}</p>
          <button
            onClick={handleRestart}
            className="px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700"
          >
            Start again from the 1920s
          </button>
        </div>
      );
    }

    switch (currentDecade) {
      case "1920s":
        return (
          <Decade1920
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1930s")}
          />
        );
      case "1930s":
        return (
          <Decade1930
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1940s")}
          />
        );
      case "1940s":
        return (
          <Decade1940
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1950s")}
          />
        );
      case "1950s":
        return (
          <Decade1950
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1960s")}
          />
        );
      case "1960s":
        return (
          <Decade1960
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1970s")} // Move to 1970s
          />
        );
      case "1970s":
        return (
          <Decade1970
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1980s")} // Move to 1970s
          />
        );
      case "1980s":
        return (
          <Decade1980
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("1990s")} // Move to 1990s
          />
        );
      case "1990s":
        return (
          <Decade1990
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("2000s")} // Move to 2000s
          />
        );
      case "2000s":
        return (
          <Decade2000
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("2010s")} // Move to 2010s
          />
        );
      case "2010s":
        return (
          <Decade2010
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("2020s")} // Move to 2020s
          />
        );
      case "2020s":
        return (
          <Decade2020
            money={money}
            updateMoney={updateMoney}
            onDeath={(deathOutcome) => handleDeath(deathOutcome)}
            onNext={() => setCurrentDecade("end")} // Show end screen
          />
        );
      case "end":
        return <EndGame money={money} onRestart={handleRestart} />;

      default:
        return (
          <button
            onClick={() => setCurrentDecade("1920s")}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
          >
            Start Game
          </button>
        );
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Welcome to the Journey Through History
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Experience the life of Samuel as he navigates through history.
        </p>
        <div className="flex items-center justify-center">
          <div className="w-3/4 max-w-2xl bg-white shadow-lg rounded-lg p-6">
            {renderDecade()}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Money amount={money} />
      </div>
    </div>
  );
};

export default Home;
