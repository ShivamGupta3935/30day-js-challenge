// Day 4 : loop 
//  task 1 :- write a program to print number from 1 to 10 using a for loop 
 
for (let i = 1; i<= 10; i++ ){
      console.log( i );
}


// task 2 : write a program to print a multiplication of a table of 5 using a for loop

 console.log("Table ");
for (let i = 1; i<= 10; i++ ){
      console.log( i * 5);
}


// while loop 
// task3 : write a program to calculate the sum of numbers from 1 to 10 using while loop
let i=1;
let sum = 0
while(i <= 10 ){
      sum += i
      i++;
}
console.log (" sum of 1 to 10 is :", sum );


// task 4 : write a program to print a number from 10 to 1 using a while loop
let j = 10
while (j >=0 ) {
      console.log(j);
      j-- 
}

//task 5 : write a program to print a number from 1 to 5 using do...while loop
let k = 1
do {      
      console.log(k);
      k++ 
} while (k <= 5);



//task 6: -- write a program to calculate the factorial of a number using do..while loop
//calculating 5 factorial
let factorial = 1

let init = 1
do {
      factorial *= init
      init++
} while (init <= 5);
 
console.log( "factorial : ", factorial);


// task 7 :-- 
for( let row=1; row<=5; row++){
      let pattern =" "
     for(let col=1; col <= row; col++){
       pattern += "*"
     } 
     console.log(pattern);
     
}


//Task 8:-- write a program to print a number from 1 to 10 but skip the number 5 using continue statementt

for(let i = 1; i <= 10; i++){
    if (i == 5) {
      continue
    }
    console.log(i);
}



//Task 8:-- write a program to print a number from 1 to 10 but stop the loop when the number iss 7 using the break statement 


for(let i = 1; i <= 10; i++){
      if (i == 7) {
        break;
      }
      console.log(i);
  }