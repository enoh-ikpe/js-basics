// // var myName = "Enobong Johnny";
// // var myAge = 20;
// // var fruits =["mango","Orange","cashew","Pawpaw","Apple","Pineapple"];
// // console.log(myName.length);

// // for (i=0; i<fruits.length; i++){
// //     console.log(myName+" likes "+fruits[i]);
// //  }

// //  var students =["Kenneth","IJ","Ejiro"];

// //  for (i=0; i<students.length; i++){
// //      console.log("Hi "+ students[i]);
// //  }

// //  var sayHello= function(name,greeting){
// //      console.log(name + " is saying " + greeting);
// //  }
// //  sayHello("Enoh","Welcome Home");

// //  var calculateGrade= function(score){
// //      var grade;
// //      if (score>=70){
// //          grade="A";
// //      }
// //      if (score>=60 && score<=69){
// //          grade ="B";
// //      }
// //      if (score >= 50 && score <= 59) {
// //        grade = "C";
// //      }
// //      if (score >= 40 && score <= 45) {
// //        grade = "D";
// //      }
// //      if (score < 45) {
// //        grade = "F";
// //      }
// //      console.log(grade);
// //  }
// //  calculateGrade(100);

// //  document.write(Date())

// //  var element = document.getElementById("id01");
// //  element.innerHTML = "New Heading";

// //  function displayDate() {
// //    document.getElementById("demo").innerHTML = Date();
// //  }

// //  alert(document.body.innerHTML);

//  var formula = function(a,b,c){
//   var result = (-b + Math.sqrt(Math.pow(b,2)) - 4 * a * c) / ( 2 * a);
//   document.write (result);
//  }
//  formula(1,1,1);

// document.write(Date());

// //  function myFunction() {
// //    var myNodelist = document.querySelectorAll("h1");
// //    var i;
// //    for (i = 0; i < myNodelist.length; i++) {
// //      myNodelist[i].style.color = "blue";
// //    }
// //  }

// document.getElementById("demo").innerHTML="Hey girl";

// var submit = document.querySelector(".btn-primary");
// submit.addEventListener("click", function () {
//   var username = document.querySelector("#id").value;
//   var word = document.querySelector("#Message").value;
//   var text = document.querySelector("#text");
//   text.innerText = username + " says " + word;
// });

// submit.addEventListener("click", function () {
//   var body = document.querySelector("body");
//   body.style.backgroundColor = "red";
//   //   console.log(obj);
// });

var button = document.querySelectorAll(".btn-light");
button.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    // console.log(val.target.innerHTML);
    // console.log(val);
    var keys = document.getElementById("form");
    var old = keys.value;
    var val = currentBtn.getAttribute("data-val");
    keys.value = old + val;

    var Addition = document.querySelector(".addition");
    Addition.addEventListener("click", function () {
      var keys = document.getElementById("form").value = "";
      console.log(keys.value);
    });
  });
});
var calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function handleOperator(nextOperator) {
 var { firstOperand, displayValue, operator } = calculator;
  var inputValue = parseFloat(displayValue);

  if (firstOperand === null) {
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = performCalculation[operator](firstOperand, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
}


// current + the operator + added value, then calculate

// var btn1 = document.querySelector(".btn-light1");

// btn1.addEventListener("click", function () {
//   document.write(".changed").value = btn1;
// });

// function inputVal(val) {
//   document.getElementById("form").value = val;
// }

// var buttons = document.querySelector(".btn-danger");
// click.addEventListener('click', function(){
//     document.querySelector("#h1")="hello javascript";
//     console.log(h1.value)
// })
// document.getElementsByClassName("btn btn-primary").onclick = myFunction();
// var myFunction =
