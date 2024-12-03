function analyzeSentence() {
    // Prompt the user to enter a sentence
    let sentence = prompt("Enter a sentence (ending with a period):");

    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let vowels = "aeiouAEIOU";

    // Variable to track word boundaries
    let inWord = false;

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Count the length (including spaces and period)
        length++;

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Check if we're inside a word
        if (char.match(/[a-zA-Z]/)) { // If character is a letter
            if (!inWord) {  // Start of a new word
                wordCount++;
                inWord = true;
            }
        } else if (char === ' ') { // If it's a space, we are outside a word
            inWord = false;
        }

        // Stop processing at the period
        if (char === '.') {
            break;
        }
    }

    // Output the results
    console.log("Length of the sentence:", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}

// Call the function to analyze the sentence
analyzeSentence();
