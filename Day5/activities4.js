// Task 7:-- write a function that take two parameter and return their product provide a default value to the second parameter

const productOfTwoNum = (num1, num2=10) => {
   return num1*num2
}

// console.log(productOfTwoNum(12,12));
// console.log(productOfTwoNum(14));

//Task 8: -- write a function that takes a person's name and age and return a greeting messege provide a default value for age 

const greetingMsg = (name, age=18) => {
      console.log(`Congratulation ${name} now you are now ${age} year old`);
}

console.log(greetingMsg("Shivam", 23));