import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle login and update the isLoggedIn state
  const handleLogin = () => {
    // Implement your login logic here, e.g., check credentials or make an API call
    // If login is successful, update the state
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          {/* Use Navigate to redirect to login if not logged in */}
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
