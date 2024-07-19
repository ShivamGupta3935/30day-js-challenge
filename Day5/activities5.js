//Task 9:- write  a highorderfunction that takes a function and a number and call the function that many time

const hofFunction = (func, num) =>{
    for(let i=1; i<=5; i++){
        func()
    }
}

const printHello = () => {
    console.log("Hello" );
}

hofFunction(printHello, 5)


//Task 10 :- write  a highorderfunction that takes two function and a value applies the first function to the value and then applies the second function to the result

let applyTwoFunc = (fun1, fun2, value ) => {
    const result = fun1(value)
    const finalResult = fun2(result)
    return finalResult
}

const multiplyByFive = (num) => num * 5

const subTractTen = (num) => num - 10

console.log(applyTwoFunc(multiplyByFive, subTractTen, 25));