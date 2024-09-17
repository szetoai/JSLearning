function cow(x,y) {
  console.log("everything");
  console.log("bagel");
  return x+y;
}
console.log(cow(6,7))
function joke(i) {
  console.log(i); // log the first element
  return arguments; // returns all arguments
}
console.log(joke(1,2,4,4,4,4,4,4,4,4,7,"54fdada")) 
// it seems like in js you can input as many as you want, even if it doesnt match parameters unlike with python
// arrows function using const
const sheep = (...baa) => {
  let sum = 0
  for (const each of baa) {
    sum += each
  } 
  return sum;
}
console.log(sheep(1,2,3,4));
// default params
function numSum(num1=10,num2=20) {
  return num1+num2;
}
console.log(numSum(5,10));
console.log(numSum()); // runs on defaults

