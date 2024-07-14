// Day 1:- Variable and data types 
// Tasks and activities 
// Activities 1 variable Declaration 

//Tasks 1 Declare a variable using var assign it a number and log the value of the console 

// solutions 
var number = 4
console.log("Number is : ", number);



//Tasks 2  Assign a variable using let assign it a string and log the value to console 

//Solution 
let str = "Hello hitesh sir "
console.log( " Print the str value : ", str);


//Activity 2 
//Constant declarations 
//Tasks 3 ;-- Declare a variable using const , assign it a boolean value and log the value to console 

//solution 
const boolValue = true
console.log("The boolean value is : ", boolValue);


//Activities 3
//Task 4:- Create variable of different data type (number , string , boolean , object and array ) and log each variable type using the 'typeof' operator

//Solutions 
let strVal = "Hello"
console.log("Type of strVal :", typeof strVal);

let num = 13
console.log("Type of num :", typeof num);

let bool = false
console.log("Type of bool :", typeof bool);

let arr = [12, 20]
console.log("Type of arr :", typeof arr);

let obj = {}
console.log("Type of obj :", typeof obj);




//Activities 4 : Reassigning variable
// Task 5 : - Declare a variable using let assign it a initial value reassign it a new value and log both value to console 

let numb = 15
console.log( "Number :", numb);

numb = 20
console.log( "Number :", numb);



//Activities 5 : Understanding const 
//Task 6 :- Try reassigning a variable declare with const and the error 

const chai = "Chai and code is unique"

 console.log( 'chai', chai);
  
//  chai = "This is copy channel of chai" 
//  when we assign here is type error 
 console.log(chai);