//task1 : -- write a function to check if a number is even or odd and log the result to the console 

function checkEvenOddNum(number){
    if (number % 2 == 0) {
        console.log("Even number");
    }else{
        console.log("Odd number ");
    }
}

// console.log(checkEvenOddNum(4));
// console.log(checkEvenOddNum(9));

//Task 2:-- write a function to calculate the square of a number and return the result


function  squareOfNumber(number) {
    return number*number
}

console.log(squareOfNumber(3));