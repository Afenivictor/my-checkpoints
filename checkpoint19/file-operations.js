const fs = require("fs");
const path = require("path");

// Define the file path for 'welcome.txt'
const filePath = path.join(__dirname, "welcome.txt");

// Step 1: Create and write to 'welcome.txt'
fs.writeFile(filePath, "Hello Node", (err) => {
    if (err) {
        console.error("Error creating the file:", err);
        return;
    }

    // Notify file creation
    console.log("File 'welcome.txt' created successfully!");

    // Step 2: Read the contents of 'welcome.txt'
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        // Print the file content
        console.log(`Content of 'welcome.txt': ${data}`);
    });
});
