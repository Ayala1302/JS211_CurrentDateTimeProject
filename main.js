// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**
let firstNum = null
let secondNum = null
let operation = null

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.
const numberToString = num => String(num);
let num = 15;
let text = num.toString();


// Write a JavaScript program to convert a string to the number.
const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}

const saveSecondNumber = (num) => {
  secondNum = parseInt(num)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const typeOf = data => Array.isArray(data) ? 'array' : typeof data;


// Write a JavaScript program that adds 2 numbers together.
  const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)
}

const putResultInElement = (operationResults) => {
  document.getElementById("result").innerHTML = "Results: " + operationResults
}

const equals = () => {
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
  }
}

// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = (a, b) => a && b;


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (a, b) => a || b;


// Write a JavaScript program that runs when both things are not true.  
const bothNotTrue = (a, b) => !a && !b;


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// const addForm = document.getElementById('add');
// addForm.addEventListener("submit", e => {
//   e.preventDefault()
//   const n1 = document.getElementById("number1").value;
//   const n2 = document.getElementById("number2").value;
//   const sum = add(stringToNumber(n1), stringToNumber(n2));
//   document.getElementById("sum").innerHTML = `The sum of ${n1} + ${n2} is ${sum}`;
// });



// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
