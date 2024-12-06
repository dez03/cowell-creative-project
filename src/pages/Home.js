import React, { useState } from "react";
import Money from "../components/Money";
import Intro from "../components/decades/Intro";
import Decade1920 from "../components/decades/1920";
import Decade1930 from "../components/decades/1930";
import Decade1940 from "../components/decades/1940";
import Decade1950 from "../components/decades/1950";
import Decade1960 from "../components/decades/1960";
import Decade1960two from "../components/decades/1960two";
import Decade1970 from "../components/decades/1970"; // <-- Import Decade1970
import Decade1970two from "../components/decades/1970two";
import Decade1980 from "../components/decades/1980";
import Decade1990 from "../components/decades/1990";
import Decade1990two from "../components/decades/1990two";
import Decade2000 from "../components/decades/2000";
import Decade2000two from "../components/decades/2000two";
import Decade2000three from "../components/decades/2000three";
import Decade2010 from "../components/decades/2010";
import Decade2010two from "../components/decades/2010two";
import Decade2020 from "../components/decades/2020";
import Decade2020two from "../components/decades/2020two";
import EndGame from "../components/EndGame";

const Home = () => {
  const [money, setMoney] = useState(100); // Initial money state
  const [currentDecade, setCurrentDecade] = useState("intro"); // Tracks the active decade
  const [isDead, setIsDead] = useState(false); // Tracks if the player has died

  const updateMoney = (amount) => {
    setMoney((prevMoney) => prevMoney + amount); // Adjust money based on choices
  };

  const handleDeath = () => {
    setIsDead(true); // Mark the player as dead
  };

  const handleRestart = () => {
    setMoney(100); // Reset money to $100
    setCurrentDecade("intro"); // Restart the game at intro
    setIsDead(false); // Reset death status
  };

  const renderDecade = () => {
    if (isDead) {
      return (
        <div>
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
      case "intro":
        return (
          <Intro
            onNext={() => setCurrentDecade("1920s")} // Move to 1920s
          />
        );
      case "1920s":
        return (
          <Decade1920
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1930s")}
          />
        );
      case "1930s":
        return (
          <Decade1930
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1940s")}
          />
        );
      case "1940s":
        return (
          <Decade1940
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1950s")}
          />
        );
      case "1950s":
        return (
          <Decade1950
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1960s")}
          />
        );
      case "1960s":
        return (
          <Decade1960
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1960two")}
          />
        );
      case "1960two":
        return (
          <Decade1960two
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1970s")}
          />
        );
      case "1970s":
        return (
          <Decade1970
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1970two")}
            onRestart={handleRestart} // Make sure onRestart is passed
          />
        );
      case "1970two":
        return (
          <Decade1970two
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1980s")}
            onRestart={handleRestart}
          />
        );
      case "1980s":
        return (
          <Decade1980
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1990s")}
            onRestart={handleRestart}
          />
        );
      case "1990s":
        return (
          <Decade1990
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("1990two")}
            onRestart={handleRestart}
          />
        );
      case "1990two":
        return (
          <Decade1990two
            money={money}
            updateMoney={updateMoney}
            onNext={() => setCurrentDecade("2000s")}
            onRestart={handleRestart} // Pass handleRestart to the component
          />
        );

      case "2000s":
        return (
          <Decade2000
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("2000two")}
            onRestart={handleRestart}
          />
        );
      case "2000two":
        return (
          <Decade2000two
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("2000three")}
            onRestart={handleRestart}
          />
        );
      case "2000three":
        return (
          <Decade2000three
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("2010s")}
            onRestart={handleRestart}
          />
        );
      case "2010s":
        return (
          <Decade2010
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("2010two")}
            onRestart={handleRestart}
          />
        );
      case "2010two":
        return (
          <Decade2010two
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("2020s")}
            onRestart={handleRestart}
          />
        );
      case "2020s":
        return (
          <Decade2020
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("2020two")}
            onRestart={handleRestart}
          />
        );
      case "2020two":
        return (
          <Decade2020two
            money={money}
            updateMoney={updateMoney}
            onDeath={handleDeath}
            onNext={() => setCurrentDecade("end")}
            onRestart={handleRestart}
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
          Journey Through History: The Adventures of Samuel
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
        <a
          href="https://github.com/dez03/cowell-creative-project"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;


