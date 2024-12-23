// Import the crypto module for generating random numbers
const crypto = require("crypto");

// Retrieve command-line arguments
const args = process.argv.slice(2); // Skip the first two arguments (node and script path)
const operation = args[0]; // The operation, e.g., add, sub, random, etc.

// Function to perform basic calculations
function calculate(operation, num1, num2) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mult":
            return num1 * num2;
        case "divide":
            if (num2 === 0) return "Error: Division by zero.";
            return num1 / num2;
        case "sin":
            return Math.sin(num1);
        case "cos":
            return Math.cos(num1);
        case "tan":
            return Math.tan(num1);
        default:
            return "Invalid operation.";
    }
}

// Function to generate random bytes and convert them to a binary string
function generateRandom(length) {
    try {
        const bytes = crypto.randomBytes(length);
        return bytes.toString("binary"); // Converts bytes to binary-like string
    } catch (error) {
        return "Error: Unable to generate random number. Check the length.";
    }
}

// Main logic for handling the operations
if (!operation) {
    console.log("Please provide an operation.");
} else if (operation === "random") {
    const length = parseInt(args[1]);
    if (!length || length <= 0) {
        console.log("Provide length for random number generation.");
    } else {
        console.log(`Generated Random Number: ${generateRandom(length)}`);
    }
} else {
    const num1 = parseFloat(args[1]);
    const num2 = parseFloat(args[2]);
    
    // Validate numeric inputs for operations other than random
    if (isNaN(num1) || (args[2] && isNaN(num2))) {
        console.log("Invalid input. Please provide valid numbers.");
    } else {
        const result = calculate(operation, num1, num2);
        console.log(`Result: ${result}`);
    }
}
