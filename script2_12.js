const nb1 = +prompt("Give me nb1");
const nb2 = +prompt("Give me nb2");
const nb3 = +prompt("Give me nb3");
const nb4 = +prompt("Give me nb4");
const nb5 = +prompt("Give me nb5");

const minNb = Math.min(nb1, nb2, nb3, nb4, nb5);
const maxNb = Math.max(nb1, nb2, nb3, nb4, nb5);

alert("min : " + minNb + "\nmax : " + maxNb);