import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Essay from "./pages/Essay";
import Money from "./components/Money";

const App = () => {
  const [money, setMoney] = useState(100);

  const updateMoney = (amount) => {
    setMoney((prevMoney) => prevMoney + amount);
  };

  const handleDeath = () => {
    setMoney(100);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
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
        <div className="text-center mt-6">
          <Money amount={money} />
        </div>
      </div>
    </Router>
  );
};

export default App;
