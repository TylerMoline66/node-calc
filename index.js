var rs = require('readline-sync');

// Ask what operation the user wants to preform
// Let User decide which operation "/" "*" "-" "+"
// Ask the user to enter their first number
// Ask User to enter second number
// Preform the proper math function and print the result "The result is: X"

var mathOperation = '';
var firstNumber = '';
var secondNumber = '';


function doTheMath () {
  if (mathOperation === '+') {
    var sum = firstNumber + secondNumber;
    console.log('The result is... ' + sum + '!');
  } else if (mathOperation === '-') {
    var sum = firstNumber - secondNumber;
    console.log('The result is... ' + sum + '!');
  } else if (mathOperation === '*') {
    var sum = firstNumber * secondNumber;
    console.log('The result is... ' + sum + '!');
  }else if (mathOperation === '/') {
    var sum = firstNumber / secondNumber;
    console.log('The result is... ' + sum + '!');
  }
}

var initialQuestion = rs.question('Lets do some math together. First, what operation would you like to perform? "/" "*" "-" "+"  '); 

while(/\((.*?)\)/g){
if (initialQuestion === '/') {
  mathOperation = initialQuestion;
  break;
}else if (initialQuestion === '*') {
  mathOperation = initialQuestion;
  break;
}else if (initialQuestion === '-') {
  mathOperation = initialQuestion;
  break;
}else if (initialQuestion === '+') {
  mathOperation = initialQuestion;
  break;
} else {
  console.log('That\'s not a valid operation. Lets start over.')
  var initialQuestion = rs.question('What operation would you like to perform? "/" "*" "-" "+"  ');
}
}


var firstNumberQuestion = rs.questionInt('Great! let\'s do some ' + mathOperation + '. Next, choose a number.  ')
firstNumber = firstNumberQuestion;

var secondNumberQuestion = rs.questionInt('Awesome, ' + firstNumber + ' will work. Now choose a second number.  ')
secondNumber = secondNumberQuestion;


doTheMath();





