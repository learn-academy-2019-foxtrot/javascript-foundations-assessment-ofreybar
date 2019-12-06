// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

var numbers = (num) =>{
  if (num % 3 === 0){
    return `${num} is divisble by 3.`
  } else {
    return `${num} is NOT divisble by 3.`
  }
}
console.log(numbers(15));
console.log(numbers(0));
console.log(numbers(385));
console.log(numbers(-7));

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

const helloMe = (firstName, lastName, height, eyeColor) => {
  return `My name is ${firstName} ${lastName}, I have ${eyeColor} eyes and am ${height}.`
}
console.log(helloMe("Ofrey", "Barsheshet", "5'10", "brown"));

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

let filter = randomNouns.filter((word, index) => {
  return index % 2 ===0
})
console.log(filter);

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const upperCaser = (arr) => {
  return arr.map(value => value.slice(0, 1).toUpperCase() + value.slice(1))
}
console.log(upperCaser(randomNouns));

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const lengthanizer = (array) => {
  return array.map(value => value.length)
}
console.log(lengthanizer(randomNouns));

// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (str) =>{
  let splitStr = str.split("")
  splitStr = splitStr.sort()
  return splitStr.join("")
}
console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetSoupV2 = (str1, str2, str3) =>{
  let souper = str1.concat(str2.concat(str3))
  splitStr = souper.split("")
  splitStr = splitStr.sort()
  return splitStr.join("")
}

console.log(alphabetSoupV2(testString1, testString2, testString3));

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

const smushedArrayz = (arr1, arr2) => {
  let iHateArr = []
  let loopLength = (arr1.length > arr2.length) ? arr1.length : arr2.length
  for (var i = 0; i < loopLength; i++) {
    iHateArr.push(arr1[i])
    iHateArr.push(arr2[i])
  }
  return iHateArr.join(" ")
}
console.log(smushedArrayz(amounts, animals));

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

const smushedArrays = (arr1, arr2) => {
  let iHateArr = []
  let loopLength = (arr1.length > arr2.length) ? arr1.length : arr2.length
  for (var i = 0; i < loopLength; i++) {
    if (arr1[i] === 1 && arr2[i].endsWith("s")) {
      let something = arr2[i].slice(0, arr2[i].length - 1)
      iHateArr.push(arr1[i])
      iHateArr.push(something)
    } else {
    iHateArr.push(arr1[i])
    iHateArr.push(arr2[i])
    }
  }
  return iHateArr.join(" ")
}
console.log(smushedArrays(amounts, animals));
