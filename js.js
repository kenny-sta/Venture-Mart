// JavaScript for search functionality

function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productList = document.getElementById('searchResults');
    const notFound = document.getElementById('notFound');
    const products = document.querySelectorAll('.product-item');
    
    productList.innerHTML = ''; // Clear previous results
    let found = false;

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();
        if (productName.includes(input)) {
            productList.appendChild(product.cloneNode(true));
            found = true;
        }
    });

    if (!found) {
        notFound.style.display = 'block';
    } else {
        notFound.style.display = 'none';
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
  
