
// Task: Title Case Converter
// Description:
// Write a function called titleCase that takes in a string as input and returns the string with the first letter of each word capitalized, and all other letters in lowercase.

// Examples:

// titleCase('hello world') should return 'Hello World'.
// titleCase('JavaScript is awesome') should return 'Javascript Is Awesome'.
// titleCase('an example') should return 'An Example'.
// Constraints:

// The input string may contain alphabetic characters, numeric digits, punctuation marks, and whitespace characters.
// Words are separated by one or more whitespace characters (e.g., spaces, tabs).
// Task:
// Implement the titleCase function in JavaScript.



function titleCase(str){

    if (typeof str !== 'string') return 'not a string';

    let res = []

    str.split(' ').forEach((elem )=>{
        let word = elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase();
        res.push(word)
    })

    return res

}

console.log(titleCase('JavaScript is awesome'))