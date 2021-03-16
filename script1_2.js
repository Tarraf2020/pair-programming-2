const a = +prompt("First number");
const b = +prompt("Second number");
const c = +prompt("Third number");

/*
while(a == b && b == c){
    alert("True");
    break;
};
while(a != b || b != c){
    alert("False");
    break;
};
*/


alert(a==b && b==c);
alert(c>b && b>a);
alert(a!=b || b!=c || a!=c);


