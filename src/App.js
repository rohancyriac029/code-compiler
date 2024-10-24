// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import TwoSum from './pages/twosum';
import Welcome from './pages/welcome'; // Import Welcome page
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root Route - Welcome Page */}
        <Route path="/" element={<Welcome />} />

        {/* Home Route */}
        <Route path="/home" element={<Home />} />

        {/* TwoSum Route */}
        <Route path="/twosum" element={<TwoSum />} />
      </Routes>
    </Router>
  );
};

export default App;
