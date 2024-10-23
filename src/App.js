import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Import React Router components
import TwoSum from './pages/twosum';  // Import the TwoSum component
import topRightImage from './logoo.png';  // Import the image

function Home() {
  return (
    <div className="App">
      <div className="container-one">
        <img src={topRightImage} alt="Top Right" className="top-right-image" />  {/* Add image here */}
        <h2>CODE.DS</h2>

        <div className="code-ds">
          <h1 id="code">CODE.</h1>
          <h1 id="ds">ds</h1>
        </div>
        <p className="subheading">
          A DSA code learning platform.<br />
          Elevate your coding skills with our carefully selected<br />
          data structures and algorithm problems.
        </p>
        <p className="sub">Start your problem-solving journey now!</p>
      </div>

      <div className="container-two">
        <div id="hi">
          <h1>Problems</h1>
        </div>
        <div id="outbox">
          <div className="lol">
            <h3>TWO SUM</h3>
            {/* Use Link to navigate to the TwoSum page */}
            <Link to="/twosum">
              <button>SOLVE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the TwoSum Page */}
        <Route path="/twosum" element={<TwoSum />} />
      </Routes>
    </Router>
  );
}

export default App;
