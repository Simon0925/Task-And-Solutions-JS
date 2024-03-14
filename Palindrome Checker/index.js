// Task: Palindrome Checker
// Description:
// Write a function called isPalindrome that takes in a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

// Examples:

// isPalindrome('radar') should return true.
// isPalindrome('A man, a plan, a canal, Panama') should return true.
// isPalindrome('hello') should return false.
// Constraints:

// The input string may contain alphabetic characters, numeric digits, punctuation marks, and whitespace characters.
// Ignore spaces, punctuation marks, and capitalization when checking for palindromes.
// Task:
// Implement the isPalindrome function in JavaScript.

function isPalindrome(str){

    let originalString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let reversedString = originalString.split('').reverse().join('');

    return reversedString === originalString

}


console.log(isPalindrome('radar'))
console.log(isPalindrome('A man, a plan, a canal, Panama') )
console.log(isPalindrome('hello') )
