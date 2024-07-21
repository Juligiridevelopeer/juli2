function swapValues(x, y) {
    // Use array destructuring to swap values
    [x, y] = [y, x];
    
    // Return an array with swapped values
    return [x, y];
}

// Example usage:
let a = 5;
let b = 10;

console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swap values using the function
[a, b] = swapValues(a, b);

console.log(`After swapping: a = ${a}, b = ${b}`);
