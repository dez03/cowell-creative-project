import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Essay from "./pages/Essay"; // Import the Essay component
import Money from "./components/Money";

const App = () => {
  const [money, setMoney] = useState(100); // Initial money is $100

  const updateMoney = (amount) => {
    setMoney((prevMoney) => prevMoney + amount); // Update money based on choice
  };

  const handleDeath = () => {
    setMoney(100); // Reset money to $100 upon death
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        {/* Add navigation links */}
        <nav className="bg-white shadow-md p-4 mb-6 rounded">
          <div className="flex justify-center space-x-4">
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/essay"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Essay
            </Link>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                money={money}
                updateMoney={updateMoney}
                handleDeath={handleDeath}
              />
            }
          />
          <Route path="/essay" element={<Essay />} />
        </Routes>
        {/* Global Money Component */}
        <div className="text-center mt-6">
          <Money amount={money} />
        </div>
      </div>
    </Router>
  );
};

export default App;
