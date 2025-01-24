import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  // State to manage paragraph visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility state
  const handleClick = () => {
    setIsVisible(true);
  }

  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      <button id="click" onClick={handleClick}>
        Show Paragraph
      </button>
      <p id="para" className={isVisible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
      </p>
    </div>
  );
}

export default App
