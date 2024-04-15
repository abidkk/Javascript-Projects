  // JavaScript logic
  let displayValue = "0";

  function addToDisplay(value) {
    if (displayValue === "0" || displayValue === "Error") {
      displayValue = value.toString();
    } else {
      displayValue += value.toString();
    }
    updateDisplay();
  }

  function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
  }

  function clearDisplay() {
    displayValue = "0";
    updateDisplay();
  }

  function calculate() {
    try {
      displayValue = eval(displayValue).toString();
    } catch (error) {
      displayValue = "Error";
    }
    updateDisplay();
  }