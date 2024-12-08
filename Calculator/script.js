let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  currentInput += num;
  display.textContent = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  display.textContent = currentInput;
}

function calculate() {
  try {
    display.textContent = eval(currentInput);
    currentInput = display.textContent;
  } catch (error) {
    display.textContent = "Error";
  }
}

function clearDisplay() {
  currentInput = "";
  display.textContent = "";
}