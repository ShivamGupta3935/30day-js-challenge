//Task5:-- Write a arrow function to calculate the sum of two number and return the result 

const addTWoNumber = (num1, num2) => {
    return num1 + num2
}

console.log(addTWoNumber(3, 4));


//Task 6:-- write a arrow function to check if a string constant a specific character and retrun a boolean value

const checkSpeficChar = (str, char) => {
    const value = str.includes(char)
    if (value == true) {
        return true
    }else{
        return false;
    }
}

let str = "hello world"
let char = "a"

console.log(checkSpeficChar(str, char));
