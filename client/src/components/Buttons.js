import React, { useState } from 'react';

function ArrowButtonsPage() {
  // Define a state variable to keep track of the clicked button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click
  const handleButtonClick = (buttonIndex) => {
    // Update the active button when clicked
    setActiveButton(buttonIndex);
  };

  // Function to determine the button's class based on whether it's active
  const getButtonClass = (buttonIndex) => {
    if (activeButton === buttonIndex) {
      return 'btn btn-success btn-lg w-100 mb-3';
    } else {
      return 'btn btn-primary btn-lg w-100 mb-3';
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <button
            className={getButtonClass(1)}
            onClick={() => handleButtonClick(1)}
          >
            Button 1 <span className="bi bi-arrow-right"></span>
          </button>
          <button
            className={getButtonClass(2)}
            onClick={() => handleButtonClick(2)}
          >
            Button 2 <span className="bi bi-arrow-right"></span>
          </button>
          <button
            className={getButtonClass(3)}
            onClick={() => handleButtonClick(3)}
          >
            Button 3 <span className="bi bi-arrow-right"></span>
          </button>
          <button
            className={getButtonClass(4)}
            onClick={() => handleButtonClick(4)}
          >
            Button 4 <span className="bi bi-arrow-right"></span>
          </button>
          <button
            className={getButtonClass(5)}
            onClick={() => handleButtonClick(5)}
          >
            Button 5 <span className="bi bi-arrow-right"></span>
          </button>
          <button
            className={getButtonClass(6)}
            onClick={() => handleButtonClick(6)}
          >
            Button 6 <span className="bi bi-arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArrowButtonsPage;
