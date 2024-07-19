//Task 3:-- write a function expression to find the maximum of two number and log the result to the console 


//function expression 
const findMaxNum = function (num1, num2){
    if (num1 > num2) {
        console.log("Num1 is maximum", num1);
    }else{
        console.log('Num2 is greater ', num2);
    }
}
findMaxNum(14, 12)
findMaxNum(54, 233)


//Task 4 :-- write a function expression to concatenate to string and return result 

const concateTwoStr = function(str1, str2){
    let concateStr = str1.concat(str2)
    return concateStr;
}

let str1 = "shubham"
let str2 = "Gupta"


console.log(concateTwoStr(str1, str2));