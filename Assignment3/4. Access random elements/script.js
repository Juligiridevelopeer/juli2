function extractElements(arr) {
    // Destructure the array into first, second, and last elements
    const [first, second, ...rest] = arr.reverse(); // Reverse to easily get the last element
    const last = rest.reverse()[0]; // Get the last element after reversing back

    // Return an array with first, second, and last elements
    return [first, second, last];
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const extractedElements = extractElements(inputArray);

console.log("Input Array:", inputArray);
console.log("Extracted Elements:", extractedElements);
