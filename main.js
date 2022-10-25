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
console.log(numberToString(20))
console.log(20)
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
  const typeOutput = (data) => {
    console.log ('data type is', typeof data)
  }


  typeOutput (53);
  typeOutput ('hello');
  typeOutput (true);
  typeOutput (undefined);


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
const bothTrue = (a, b) => {
  if (a && b){
    console.log('a & b are both true')
  }};


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = (a, b) => {
  if (a || b){
    console.log ('a || b when 1 of 2 things are true')
  }};


// Write a JavaScript program that runs when both things are not true.  
const bothNotTrue = (a, b) => {
  if (!a && !b){
    console.log ('!a && !b when both are not true')
  }};


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



// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
