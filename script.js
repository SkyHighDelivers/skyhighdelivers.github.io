const correctPasscode = '94813';

document.getElementById('submit').addEventListener('click', checkPasscode);
document.getElementById('passcode').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPasscode();
    }
});

function checkPasscode() {
    const userInput = document.getElementById('passcode').value;
    const messageElement = document.getElementById('message');
    
    // Clear any existing timeout
    if (window.messageTimeout) {
        clearTimeout(window.messageTimeout);
    }

    if (userInput === correctPasscode) {
        // Hide the passcode input and show the protected content
        document.getElementById('passcodeContainer').style.display = 'none';
        document.getElementById('protectedContent').style.display = 'block';
        
        // Store in session storage that user is authenticated
        sessionStorage.setItem('authenticated', 'true');
    } else {
        messageElement.textContent = 'Access Denied. Try Again.';
        
        // Clear the message after 3 seconds
        window.messageTimeout = setTimeout(() => {
            messageElement.textContent = '';
        }, 3000);
        
        // Clear the input
        document.getElementById('passcode').value = '';
    }
}

// Check if user was previously authenticated in this session
window.onload = function() {
    if (sessionStorage.getItem('authenticated') === 'true') {
        document.getElementById('passcodeContainer').style.display = 'none';
        document.getElementById('protectedContent').style.display = 'block';
    }
};

// Sample products
const products = [
    { name: "Product 1", description: "Description of Product 1.", price: "$10.00" },
    { name: "Product 2", description: "Description of Product 2.", price: "$15.00" },
    { name: "Product 3", description: "Description of Product 3.", price: "$20.00" },
    { name: "Product 4", description: "Description of Product 4.", price: "$25.00" }
  ];
  
  let currentIndex = 0;
  
  const productName = document.getElementById("productName");
  const productDescription = document.getElementById("productDescription");
  const productPrice = document.getElementById("productPrice");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  
  function updateProduct() {
    const product = products[currentIndex];
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = product.price;
  }
  
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateProduct();
    }
  });
  
  rightArrow.addEventListener("click", () => {
    if (currentIndex < products.length - 1) {
      currentIndex++;
      updateProduct();
    }
  });
  
  updateProduct();
  