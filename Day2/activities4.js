let numOne = 10
let numTwo = 20 
let numThree = "10"
let numFour = "20"


//Task 11  Write a program that uses the && operator to combine two condition and log the result to console 

if (numOne < numTwo && numOne == numThree ) {
    console.log("condition one and condition 2 is true :");
}


//TASK 12  Write a program that uses the ?? operator to combine two condition and log the result to console 

if (numOne < numTwo || numOne === numThree ) {
    console.log("condition one and condition 2 is true :");
}

// TASK 13 Write a program that uses the ! operator and negate a  condition and log the result to console 
let isRaining = true
let isNotRaining = !isRaining

console.log(isNotRaining);


// Task 14: -- write a program that use a ternary operator to check if the number is positive or negative log to result in console 

let num = -20
console.log( num > 0 ? "positive Number " : 'negative number');