// Android 
var expression;
var result;
var keys = document.getElementById("form");
var old = keys.value;
var button = document.querySelectorAll(".btn-light");
button.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    var keys = document.getElementById("form");
    var old = keys.value;
    var val = currentBtn.getAttribute("data-val");
    keys.value = old + val;
    expression = keys.value;
  });
});

var button2 = document.querySelector(".equates");
button2.addEventListener("click", function () {
  // console.log(expression);
  keys.value = eval(expression);
});
console.log(result);


var clear = document.querySelector(".clears");
clear.addEventListener("click", function(event) {
  keys.value = "";
  expression = "";
} )


// Ios
// var keys = document.getElementById("form");
// firstOperand;
// var old = keys.value;
// var button = document.querySelectorAll(".btn-light");
// button.forEach(function (currentBtn) {
//   currentBtn.addEventListener("click", function () {
//     var keys = document.getElementById("form");
//     var old = keys.value;
//     var val = currentBtn.getAttribute("data-val");
//     keys.value = old + val;
//     firstOperand = keys.value;
//   });
// });

// var addition = document.querySelector('addition');
// addition.addEventListener("click",function (){
//   var keys = document.getElementsById("form").value = "";
//   console.log(keys.value);
// })