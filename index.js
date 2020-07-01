// // var myName = "Enobong Johnny";
// // var myAge = 20;
// // var fruits =["mango","Orange","cashew","Pawpaw","Apple","Pineapple"];
// // console.log(myName.length);

// // for (i=0; i<fruits.length; i++){
// //     console.log(myName+" likes "+fruits[i]);
// //  }

 var students =[100+20];

 for (i=0; i<students.length; i++){
     console.log(students[i]);
 }
 var t = [1+2+4];
 console.log(t);
 

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

var firstOperand ="keys.value";
var Operator;
var secondOperand;
var button = document.querySelectorAll(".btn-light");
button.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    // console.log(val.target.innerHTML);
    // console.log(val);
    var keys = document.getElementById("form");
    var old = keys.value;
    // console.log(keys.value);
  
    var val = currentBtn.getAttribute("data-val");
    keys.value = old + val;

    console.log(keys.value);
  });
});
 function addittion (){
   console.log(firstOperand + secondOperand);
 }


    var Add = document.querySelector(".addition");
    Add.addEventListener("click", addittion)
  


