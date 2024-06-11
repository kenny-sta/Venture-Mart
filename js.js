function search() {
    var input, filter, productItems, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.trim().toLowerCase(); // Convert search term to lowercase and trim whitespace
    productItems = document.querySelectorAll('.product-item');
    var found = false;

    for (i = 0; i < productItems.length; i++) {
        var productItem = productItems[i];
        txtValue = productItem.textContent || productItem.innerText;
        txtValue = txtValue.trim().toLowerCase(); // Convert product text to lowercase and trim whitespace
        if (txtValue.includes(filter)) { // Check if the product text contains the search term
            productItem.style.display = ""; // Show the product item
            found = true;
        } else {
            productItem.style.display = "none"; // Hide the product item if it doesn't match
        }
    }

    if (!found) {
        document.getElementById('notFound').style.display = "block"; // Display "Not Found" message if no matching products found
    } else {
        document.getElementById('notFound').style.display = "none"; // Hide "Not Found" message if matching products found
    }
}

// Add event listener to trigger search function when Enter key is pressed
document.getElementById('searchInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Check if the key pressed is Enter (keyCode 13)
        event.preventDefault(); // Prevent default form submission behavior
        search(); // Call the search function
    }
});

// Function to handle the buy now action
function buyNow(button, productId) {
    // Get the product name and price from the button's parent element
    const productName = button.parentElement.querySelector('h2').textContent;
    const productPrice = button.parentElement.querySelector('p:nth-child(3)').textContent;
    
    // Display a confirmation message
    alert(`You are about to buy ${productName} for ${productPrice}.`);
    
    // Simulate adding the product to the cart (asynchronous operation)
    setTimeout(() => {
      // Check if the product is already in the cart
      const isInCart = Math.random() < 0.5; // Simulate 50% probability
      
      if (isInCart) {
        // Display a success message
        alert(`${productName} is added to your cart.`);
      } 
    }, 1000); // Simulate delay of 1 second (1000 milliseconds)
  }
  