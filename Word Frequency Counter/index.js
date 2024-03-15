// Task: Word Frequency Counter
// Description:
// Write a function called countWords that takes in a string as input and returns an object representing the frequency of each word in the string. The keys of the object should be the unique words in the string, and the values should be the corresponding frequencies (i.e., the number of times each word appears).

// Examples:

// countWords('hello world hello') should return { 'hello': 2, 'world': 1 }.
// countWords('apple banana apple orange banana') should return { 'apple': 2, 'banana': 2, 'orange': 1 }.
// countWords('hello Hello HELLO') should return { 'hello': 3 }.
// Constraints:

// Words are separated by one or more whitespace characters (e.g., spaces, tabs).
// Treat uppercase and lowercase versions of the same word as distinct (e.g., 'hello' and 'Hello' are considered different words).
// Task:
// Implement the countWords function in JavaScript.


function countWords(str) {
    let wordsArray = str.toLowerCase().split(' ');
    return wordsArray.reduce((data, word) => {
        data[word] = (data[word] || 0) + 1;
        return data;
    }, {});
}


console.log(countWords('hello world hello'))
console.log(countWords('apple banana apple orange banana'))
console.log(countWords('hello Hello HELLO'))
