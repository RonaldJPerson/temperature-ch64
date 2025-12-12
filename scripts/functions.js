console.log("functions running...");

//1. function declaration (creating the fn)
function sayHello() {
    //the body of fn
    console.log("Hello, corhort 64!");
}

//2. call/run/trigger/execute the fn(code,console,user)
sayHello(); //code run
sayHello(); //code run
sayHello(); //code run

//Example 2 with 1 parameter
function greetBird(birdName) {
    document.write(`<p> Hello <b>${birdName}</b>! ready to destroy some pigs </p>`);
}

greetBird("Blue");
greetBird("Red");
greetBird("Yellow");

// Example 3 with 2 parameters

function greetPlayers(firstName, lastName) {
    document.write(`<p> Welcome back ${firstName} ${lastName}</p>`);
}

greetPlayers("Mark", "York");
greetPlayers("Ron", "Person");

// Challenge: 1
//task: create a function called 'double score' that takes one number (the players score).
//The function should return the double of the score


function doubleScore(score){
    let total = score * 2;
    console.log(`Your new score is: ${total}`)
}

doubleScore(10); //20
doubleScore(12); //24
doubleScore(8); //16

//Examnple 4 with prompt()
function askPigName() {
    let pigName = prompt("Enter the Pig's name: ");
    console.log(`Target: ${pigName}`);
    }
    //option 1. call the fuction on the code
    //askPigName();
    //option 2. use the console to theigger the function
    //option 3. the user on the html

    //Example 5 with default parameters
    function add(num1=0, num2=0) {
        let total = num1 + num2;
        console.log(`The total is ${total}`);
    }
    add(); //0
    add(2,2); //4
    add(5,22); //27
    

function combineNames(firstName="Unknown", lastName="Unknown") {
        let fullName = `${firstName} ${lastName}`;
        console.log(`The full name is: ${fullName}`);
}




    combineNames("Alice","Johnson"); //Alice Johnson
    combineNames("Alice");//Alice Unknown
    combineNames(""); // Unknown 


//console.log(`${mins} mins are ${secs} secs`)
//}
//convertToSeconds(30);
//convertToSeconds(10);
//convertToSeconds(3);
function convertToSeconds() {
    let totalSeconds = (minutes * 60);
    console.log(`Total seconds = ${totalSeconds}`);
}

    console.log(`Total Second from ${minutes} minutes are ${totalSeconds}`);//120
    //convertToSeconds(5); //300
    //convertToSeconds(10); //600

    function convertToSeconds(){
        let mins = prompt("Enter the number of minutes: ");
        let secs = mins * 60;
        document.getElementById("results").innerHTML = `${mins} mins are ${secs} secs`;
    }