// Task: Fibonacci Sequence Generator
// Description:
// Write a function called generateFibonacci that takes in a number n as input and generates the Fibonacci sequence up to the nth term. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

// Examples:

// generateFibonacci(5) should return [0, 1, 1, 2, 3].
// generateFibonacci(8) should return [0, 1, 1, 2, 3, 5, 8, 13].
// generateFibonacci(1) should return [0].
// Constraints:

// The input number n is greater than or equal to 1.
// The output should include the Fibonacci sequence up to the nth term, inclusive.
// Task:
// Implement the generateFibonacci function in JavaScript.



function generateFibonacci(number) {

    if(number === 1) return [0]
    
    let fibonacciSequence = [0, 1]

    for (i = 2; i <= number; i ++){

        let nextTerm  = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
        fibonacciSequence.push(nextTerm)
        
    }

    return fibonacciSequence

}

console.log(generateFibonacci(5))
console.log(generateFibonacci(8))
console.log(generateFibonacci(1))
