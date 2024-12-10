// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box"); // Select the color box
    const changeColorBtn = document.getElementById("change-color-btn"); // Select the button

    // Function to generate a random hexadecimal color
    function getRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generate random hex
        return `#${randomColor.padStart(6, '0')}`; // Format to 6 digits and prepend '#'
    }

    // Add click event listener to the button
    changeColorBtn.addEventListener("click", () => {
        const newColor = getRandomColor(); // Get a new random color
        colorBox.style.backgroundColor = newColor; // Change the box color
    });
});
