//Task 3: - write a program to find the largest of three number using nexted if else statement 
let num1 = 23
let num2 = 123
let num3 = 4

let largest ;

if (num1 > num2) {
    if (num1 > num3) {
        largest = num1
        console.log(largest);
    }else{
        largest = num3
        console.log(largest);
    }
} else {
    if (num2 > num3 ) {
        largest = num2
        console.log(largest);
    }else{
        largest = num3
        console.log(largest);
    }
    
}