let a = +prompt("First number");
let b = +prompt("Second number");
let c = +prompt("Third number");

let result1 = a % 10;
let result2 = b % 10;
let result3 = c % 10;

if(result1 == result2 && result1 == result3){
    alert("They have the same last digit");
}
else{
    alert("They don't have the same last digit");
}