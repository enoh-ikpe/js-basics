// Android 
// var expression;
// var result;
// var keys = document.getElementById("form");
// var old = keys.value;
// var button = document.querySelectorAll(".btn-light");
// button.forEach(function (currentBtn) {
//   currentBtn.addEventListener("click", function () {
//     var keys = document.getElementById("form");
//     var old = keys.value;
//     var val = currentBtn.getAttribute("data-val");
//     keys.value = old + val;
//     expression = keys.value;
//   });
// });

// var button2 = document.querySelector(".equates");
// button2.addEventListener("click", function () {
//   // console.log(expression);
//   keys.value = eval(expression);
// });
// console.log(result);


// var clear = document.querySelector(".clears");
// clear.addEventListener("click", function(event) {
//   keys.value = "";
//   expression = "";
// } )


// Ios
var calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  var display = document.querySelector(".changed");
  display.value = calculator.displayValue;
}

updateDisplay();
var button = document.querySelector(".calculate");
button.addEventListener('click', (event) => {
  var { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('addition')) {
    console.log('addition', target.value);
    return;
  }

  if (target.classList.contains('clears')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});


// function handleOperator(nextOperator) {
//   const { firstOperand, displayValue, operator } = calculator;
//   const inputValue = parseFloat(displayValue);
//   if (operator && calculator.waitingForSecondOperand) {
//     calculator.operator = nextOperator;
//     console.log(calculator);
//     return;
//   }

//   if (firstOperand == null) {
//     calculator.firstOperand = inputValue;
//   } else if (operator) {
//     const currentValue = firstOperand || 0;
//     const result = performCalculation[operator](currentValue, inputValue);

//     calculator.displayValue = String(result);
//     calculator.firstOperand = result;
//   }

//   calculator.waitingForSecondOperand = true;
//   calculator.operator = nextOperator;
//   console.log(calculator);
// }

// var performCalculation = {
//   "/": (firstOperand, secondOperand) => firstOperand / secondOperand,

//   "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

//   "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

//   "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

//   "=": (firstOperand, secondOperand) => secondOperand,
// };

// function resetCalculator() {
//   calculator.displayValue = "0";
//   calculator.firstOperand = null;
//   calculator.waitingForSecondOperand = false;
//   calculator.operator = null;
// }

// function updateDisplay() {
//   const display = document.querySelector(".calculator-screen");
//   display.value = calculator.displayValue;
// }

// updateDisplay();

// var keys = document.querySelector("mb-2");
// keys.addEventListener("click", (event) => {
//   var { target } = event;
//   if (!target.matches("button")) {
//     return;
//   }

//   if (target.classList.contains("operator")) {
//     handleOperator(target.value);
//     updateDisplay();
//     return;
//   }

//   if (target.classList.contains("decimal")) {
//     inputDecimal(target.value);
//     updateDisplay();
//     return;
//   }

//   if (target.classList.contains("all-clear")) {
//     resetCalculator();
//     updateDisplay();
//     return;
//   }

//   inputDigit(target.value);
//   updateDisplay();
// });