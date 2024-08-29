// making an array
// Array() constructor
const my_arr = Array(5); // array of 5 empty values
console.log(my_arr);
// square brackets
let arr2 = [1,2,3,4,5,"pie"];
console.log(arr2, arr2.length);
// creating an array using split()
let str = "Hippo";
let arr3 = str.split("");
console.log(arr3);
let letter = arr3[0];
console.log(letter);
// modifying arrays
let ex_array = [5,6,7,8];
ex_array[0] = 1;
console.log(ex_array);
// fill
let filled_arr = Array(5).fill("Pizza");
console.log(filled_arr);
// concat
let filled_arr2 = Array(5).fill("Pie");
let combined_arr = filled_arr.concat(filled_arr2);
// other tricks
console.log(combined_arr, combined_arr.length, 
  combined_arr.indexOf("Pie"), combined_arr.lastIndexOf("Pie"), combined_arr.includes("Pizza")); // index of returns first index or -1 if DNE
// checks if something is an array
let num_array = [1,2,3,4,5];
console.log(Array.isArray(num_array)); 
// convert to string
num_array = num_array.toString();
console.log(num_array);
console.log(ex_array.join(" ")); // joins all elements in ex_array with spaces in between
// slicing
console.log(ex_array.slice(0,2));
// splicing (start, # of items, item 1 to add, item 2 to add ... item x to add)
let splice_arr = [1,2,3,4,5,6,7,8];
splice_arr.splice(1,3,9,9,9,9);
console.log(splice_arr) // start at 1, remove 3 items, add 4 9's in their place
// OTHER TRICKS
// .push adds item to end
// .pop removes ending item
// .shift removes starting item
// .unshift adds starting item
// .reverse reverses array
// .sort sorts