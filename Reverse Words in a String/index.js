// Task: Reverse Words in a String
// Description:
// Write a function called reverseWords that takes in a string as input and returns a new string where the order of words is reversed.

// Examples:

// reverseWords('hello world') should return 'world hello'.
// reverseWords('JavaScript is awesome') should return 'awesome is JavaScript'.
// reverseWords('an example') should return 'example an'.
// Constraints:

// The input string may contain alphabetic characters, numeric digits, punctuation marks, and whitespace characters.
// Words are separated by one or more whitespace characters (e.g., spaces, tabs).
// Maintain the order of characters within each word.
// Task:
// Implement the reverseWords function in JavaScript.


function reverseWords(str){
   return str.split(' ').reverse().join(' ')
}

console.log(reverseWords('hello world'))