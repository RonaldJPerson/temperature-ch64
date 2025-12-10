console.log("My script is working");

//String value
let firstName = "Samatha";
//Numerical value
let myAge = 999;
//Boolean value
let isProfessor = true;
let isStudent = false;

// display the values
console.log(firstName);
console.log(myAge);
console.log(isProfessor);
console.log(isStudent);

//Mini challenge:
//create a variable for your last name
// create a variable for your height.
//finally, show each variable seperatly in the console.
let lastName = "Person";
let heightInches = 72;
console.log(lastName);
console.log(heightInches);

//concatination(join strings)
console.log("Last name: " + lastName);
console.log("Height: " + heightInches + " inches");

//Arithmetitc operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;

console.log(" --Arithmetic operations --");
console.log("Addition of " + num1 + " and " + num2 + " is: " + sum);
//interpolation string or template string
console.log(`Subtraction of ${num1} and ${num2} is equal to: ${sub}`);
console.log(`Multiplication of ${num1} and ${num2} is equal to: ${mult}`);
console.log(`Division of ${num1} and ${num2} is equal to: ${div}`);

//Mini challenge Area of a Circle
let radius = 3;
let pi = 3.14;
let area = pi * radius * radius;

console.log(`The area of a circle with a radius of ${radius} is: ${area}`);

//difference between veriableand constant
// create the variable
let aVariable;
//assign the value 
aVariable = 30;
//create and assign the value
let anotherVariable = 50;
console.log(aVariable, anotherVariable);

const weekDays = 7
//weekDays = 9;
console.log(weekDays);
//constant won't change
const daysInWeek = 7;
//the variabiles change
let vacationsDays = 14;

let totalDays = daysInWeek + vacationsDays;

//Now vacation change
vacationsDays = 21;
