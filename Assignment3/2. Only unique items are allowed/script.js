function removeDuplicates(arr) {
    // Use Set to store unique elements
    const uniqueElements = new Set(arr);

    // Convert Set back to array (if needed)
    // Using spread operator or Array.from()
    return [...uniqueElements];
}

// Example usage:
const numbers = [1, 2, 3, 4, 2, 3, 5, 1, 6];
const uniqueNumbers = removeDuplicates(numbers);

console.log("Original array:", numbers);
console.log("Array with duplicates removed:", uniqueNumbers);
