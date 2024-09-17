const squarer = (num) => {
    return num ** 2
}
// square_plus_two : Number -> Number
// Returns the square of a given number plus two
function square_plus_two(num,fn) {
  return fn(num) + 2
}
// tests
console.log(363 == square_plus_two(19, squarer))
console.log(2 == square_plus_two(0, squarer))
console.log(18 == square_plus_two(-4, squarer))
console.log(8.25 == square_plus_two(2.5,squarer))

// returning functions
function plus(x,y) {return x+y}
function minus(x,y) {return x-y}
function plus_or_minus(choice) {
    if (choice == "plus") {
        return plus
    }
    else {return minus}
}
console.log(110 == plus_or_minus("plus")(100,10))
// wow! weird loops!
setInterval(plus(1,1), 1000) // print 2 every 5 seconds