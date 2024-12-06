// String Manipulation Functions

//Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse a String from hello");

console.log(reverseString("hello")); // Output: 'olleh'

console.log("===================");

//count characters
function countCharacters(str) {
  return str.length;
}
console.log("Count characters in the string from hello");
console.log(countCharacters("hello")); // Output: 5

console.log("=============");

// capitalize each words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("Capitalizing hello word");
console.log(capitalizeWords("hello world")); // Output: 'Hello World'

console.log("=============");

//Array Functions

//Find Maximum
function findMaximum(arr) {
  return Math.max(...arr);
}

//Find Minimum

function findMinimum(arr) {
  return Math.min(...arr);
}
console.log("Find Maximum from array [1, 2, 3,]");
console.log(findMaximum([1, 3, 7, 2, 5])); // Output: 7
console.log("Find Minimum from array [1, 2, 3,]");
console.log(findMinimum([1, 3, 7, 2, 5])); // Output: 1
console.log("========================");

//Sum of Array
function sumOfArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log("Find the sum of array [1,2,3...]");
console.log(sumOfArray([1, 2, 3, 4])); // Output: 10

console.log("==================");

//Filter Array
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

console.log("filtering array");
console.log(filterArray([1, 2, 3, 4], (num) => num > 2)); // Output: [3, 4]

console.log("=========================");

// Mathematical Functions

// Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5");
console.log(factorial(5)); // Output: 120
console.log("=========================");

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log("Check if 7 and 10 is a prime number");
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log("==================");

//Fibonacci Sequence

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  }
  console.log("fibonacci sequence 5");
  console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]

  

