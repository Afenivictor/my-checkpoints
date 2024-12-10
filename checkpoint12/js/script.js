document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".card"); // Select all product cards
    const totalPriceElement = document.querySelector(".total"); // Display for total price
    let totalPrice = 0;
  
    // Function to update the total price
    function updateTotalPrice(priceChange) {
      totalPrice += priceChange;
      totalPriceElement.textContent = `${totalPrice} $`;
    }
  
    productCards.forEach((card) => {
      const unitPrice = parseInt(
        card.querySelector(".unit-price").textContent.trim().split(" ")[0]
      ); // Get the unit price of the product
      const quantityElement = card.querySelector(".quantity"); // Quantity display
      const plusButton = card.querySelector(".fa-plus-circle"); // "+" button
      const minusButton = card.querySelector(".fa-minus-circle"); // "-" button
      const deleteButton = card.querySelector(".fa-trash-alt"); // Trash/delete button
      const likeButton = card.querySelector(".fa-heart"); // Heart/like button
  
      // Handle "+" button click
      plusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity += 1; // Increment quantity
        quantityElement.textContent = quantity;
        updateTotalPrice(unitPrice); // Update total price
      });
  
      // Handle "-" button click
      minusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity -= 1; // Decrement quantity
          quantityElement.textContent = quantity;
          updateTotalPrice(-unitPrice); // Update total price
        }
      });
  
      // Handle delete button click
      deleteButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        const productTotal = quantity * unitPrice; // Calculate total price of this product
        updateTotalPrice(-productTotal); // Subtract product total from total price
        card.parentElement.remove(); // Remove product card from DOM
      });
  
      // Handle like button click
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("liked"); // Toggle 'liked' class
        if (likeButton.classList.contains("liked")) {
          likeButton.style.color = "red"; // Change heart color to red
        } else {
          likeButton.style.color = ""; // Reset heart color
        }
      });
    });
  });
  