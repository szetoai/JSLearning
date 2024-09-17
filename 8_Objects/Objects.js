const dog = {
    sound: "bark",
    food: "omnivore",
    intro: function() {
        return "hi, I am a dog."
    }
}
// accessing data
console.log(dog.food);
console.log(dog["sound"]);
console.log(dog.intro());
// changing/adding keys
dog.sound = "ruff";
console.log(dog);
// .assign - copies
const newDog = Object.assign({}, dog);
console.log(newDog);
// .keys - returns all keys as array
console.log(Object.keys(newDog));
// .values - returns all values as array
console.log(Object.values(newDog));
// .entries - returns keys/values as array
console.log(Object.entries(newDog));
// .hasOwnProperty - check if key/property exists
console.log(newDog.hasOwnProperty("sound")) // true