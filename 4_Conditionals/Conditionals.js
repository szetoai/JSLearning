let x = 5;
if (x==5) {
  console.log("x is indeed 5");
}
x = 10;
// self explanatory
if (x==5) {
  console.log('x is 5');
} else if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is not 5");
}
// switch(case) checks for different cases
y = Number(prompt("Enter Number:"))
switch(true) {
  case y==5:
    console.log("y is 5");
    break
  case y>10:
    console.log("y is greater than 10");
    break
  case y==15:
    console.log("y is 15");
}
let z = 6;
switch(z) {
  case 6:
    console.log("z is 6");
    break;
}
// ternary operators - awful
let a = true
a
  ? console.log("a is true")
  : console.log("a is false");