function wordCount(str) {
    // Step 1: Split the string into an array of words
    const words = str.split(' ');

    // Step 2: Create a Map to store word counts
    const wordMap = new Map();

    // Step 3: Iterate through the array of words and count occurrences
    words.forEach(word => {
        // Convert word to lowercase to handle case insensitivity
        const lowercaseWord = word.toLowerCase();

        // Remove non-alphabetic characters (optional)
        const cleanedWord = lowercaseWord.replace(/[^a-z]/g, '');

        // Check if the word is not empty after cleaning
        if (cleanedWord !== '') {
            if (wordMap.has(cleanedWord)) {
                // Increment count if word exists in the map
                wordMap.set(cleanedWord, wordMap.get(cleanedWord) + 1);
            } else {
                // Initialize count to 1 if word is not in the map
                wordMap.set(cleanedWord, 1);
            }
        }
    });

    // Step 4: Return the Map containing word counts
    return wordMap;
}

// Example usage:
const text = "Hello world hello JavaScript world";
const wordCounts = wordCount(text);

// Print the word counts
wordCounts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
