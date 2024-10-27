
const correctPasscode = '94813';

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const userInput = document.getElementById('passcode').value;
    const messageElement = document.getElementById('message');

    if (userInput === correctPasscode) {
        // Hide the passcode input and show the main content
        document.getElementById('passcodeContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    } else {
        messageElement.textContent = 'Access Denied. Try Again.';
        messageElement.style.color = 'red';
    }
});