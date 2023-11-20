// Get elements from the DOM
const progressBar = document.getElementById('myProgressBar');
const getStartedButton = document.getElementById('getStartedBtn');
const restartButton = document.getElementById('restartBtn');

// Retrieve stored progress and module number from localStorage
let progress = parseInt(localStorage.getItem('progress')) || 0;
let moduleNumber = parseInt(localStorage.getItem('moduleNumber')) || 1;

// Update progress bar and module number function
function updateProgress() {
    // Increase progress by 20%
    progress += 20;

    // Update progress bar width
    progressBar.style.width = `${progress}%`;

    // Update module number
    moduleNumber++;
    getStartedButton.innerText = `Module ${moduleNumber}`;

    // Show restart button when progress is 100%
    if (progress === 100) {
        restartButton.style.display = 'inline-block';
    }

    // Store progress and module number in localStorage
    localStorage.setItem('progress', progress);
    localStorage.setItem('moduleNumber', moduleNumber);
}

// Add click event listener to the "Get Started" button
getStartedButton.addEventListener('click', function () {
    // Check if progress is less than 100% before updating
    if (progress < 100) {
        updateProgress();
    }
});

// Add click event listener to the "Restart" button
restartButton.addEventListener('click', function () {
    // Reset progress and module number to initial values
    progress = 0;
    moduleNumber = 1;

    // Update progress bar width
    progressBar.style.width = `${progress}%`;

    // Update button text
    getStartedButton.innerText = 'Get Started';

    // Hide the restart button
    restartButton.style.display = 'none';

    // Clear stored progress and module number in localStorage
    localStorage.removeItem('progress');
    localStorage.removeItem('moduleNumber');
});