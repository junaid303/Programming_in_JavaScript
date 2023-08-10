var readlineSync = require('readline-sync');

var inputNum = readlineSync.question("Enter the Number : "); //input N

function factorial(num){
    if(num<=1) return 1;
    return num * factorial(num - 1);
}

var result = factorial(inputNum);
console.log(`The factorial of ${inputNum} is ${result}`);