function findMinMax(arr) {
    // Using spread operator to pass array elements as arguments to Math.max and Math.min
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Return an object with max and min properties
    return { max, min };
}

// Example usage:
const numbers = [5, 2, 7, 1, 9];
const result = findMinMax(numbers);

console.log("Input Array:", numbers);
console.log("Maximum and Minimum Values:", result);
