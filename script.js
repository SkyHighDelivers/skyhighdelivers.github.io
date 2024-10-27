// The actual passcode (for simplicity, matching your original)
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