// let, var, and const are all global vars
a = "Javascript"; // can be found in window object
let b = 15; // global
console.log(a, b);
function example() {
    let c = "fifty";
    console.log(c);
}
example();
// console.log(c); // doesnt work since c is only global within example()
if (true) {
    let pig = 5;
    pig += 5;
}
// console.log(pig) // doesnt work since pig is local to the if block
