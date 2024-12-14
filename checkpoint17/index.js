//Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example Usage
console.log(isLeapYear(2024)); // 2024 is a leap year.
console.log(isLeapYear(1900)); // 1900 is not a leap year.
console.log(isLeapYear(2000)); // 2000 is a leap year.


//Ticket Pricing 
function getTicketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else if (age >= 18) {
        return "The ticket price is $20.";
    } else {
        return "Invalid age.";
    }
}

// Example Usage
console.log(getTicketPrice(10)); // The ticket price is $10.
console.log(getTicketPrice(15)); // The ticket price is $15.
console.log(getTicketPrice(25)); // The ticket price is $20.


//Fibonacci Sequence
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example Usage
console.log(fibonacci(6)); // 8 (0, 1, 1, 2, 3, 5, 8)
console.log(fibonacci(10)); // 55


//Palindrome Checker
function isPalindrome(str) {
    // Clean the string: remove spaces, punctuation, and make it lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Base cases
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;

    // Recursive case
    return isPalindrome(str.slice(1, -1));
}

// Example Usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true
