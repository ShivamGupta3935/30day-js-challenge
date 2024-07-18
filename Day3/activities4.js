// task 6 write a program that uses a ternary operator  to check if a numbere is even or odd log to the console 

let num = 41
 num % 2 == 0 ? console.log("even num") : console.log("odd number "); 


//  tasks 7 : --  write a program to check if a year is a leap year using multiple condition (devisible by 4 but not 100 unless also divisible by 400) and log the result to the console 

let leapYear = 2016

if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0) ) {
    console.log( "leap year ", leapYear);
}else{
    console.log( "not a leap year ", leapYear);
}
