// tasks 4 :write a program that uses a switch case to determine the day of the week based on a number and log the day named to a number 

// const day = parseFloat(prompt("Enter a number between 1 to 7 "))
let day = 5
switch(day){
    case day = 1:
        console.log("Day is sunday");
        break;
    case day = 2:
        console.log("Day is monday");
        break;
    case day = 3:
            console.log("Day is tuesday");
            break;
    case day = 4:
            console.log("Day is wednesday");
            break;
    case day = 5:
            console.log("Day is thursday");
            break;
    case day = 6:
            console.log("Day is friday");
            break;
    case day = 7:
            console.log("Day is saturday");
            break;
    default:
        console.log( "invalid number");

    
}


// task 5 :-- write a progrram that uses a switch case to assign a grade (A, B , C, D , F) basesd on a score and log the grade to console 

let score = 50 ;
let grade ; 
 switch (grade ) {
    case score >= 90 && score <= 100:
        grade = "A+"
        console.log("Grade is ",grade);
    break;
    case score >= 80:
        grade = "A"
        console.log("Grade is ", grade);
    break;
    case score >= 70:
        grade = "B+"
        console.log("Grade is ", grade);
    break;
    case score >= 60:
        grade = "B"
        console.log("Grade is ", grade);
    break;
    case score >= 50:
        grade = "C"
        console.log("Grade is C",grade);
    break;
    case score >= 33:
        grade = "D"
        console.log("Grade is ", grade);
    break;
    case score < 33:
        grade = "F"
        console.log("Grade is ", grade);
    break;
    default:
        console.log( "Invalid score ");

 }
