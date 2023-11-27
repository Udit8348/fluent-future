// Get elements from the DOM
const progressBar = document.getElementById('myProgressBar');
const getStartedButton = document.getElementById('getStartedBtn');
const restartButton = document.getElementById('restartBtn');
const contentContainer = document.querySelector('.text-images-container');

// Retrieve stored progress and module number from localStorage
let progress = 0;
let moduleNumber = parseInt(localStorage.getItem('moduleNumber')) || 1;
const totalModules = 6;

// Content for each module
const moduleContent = [
    `<div class="module-content">Welcome to Fluent Future, Press the Button To Begin</div>`,`<div class="module-content">    <h2>Module 1: LLM Types</h2>    <div class="sections-container">        <div class="side-by-side">            <section class="pros">                <!-- Content for Pros -->                <h3>Pros</h3>                <ul>                    <li>Pros item 1</li>                    <li>Pros item 2</li>                    <!-- Add more pros as needed -->                </ul>            </section>            <section class="cons">                <!-- Content for Cons -->                <h3>Cons</h3>                <ul>                    <li>Cons item 1</li>                    <li>Cons item 2</li>                    <!-- Add more cons as needed -->                </ul>            </section>        </div>        <div class="full-width">            <section class="review">                <!-- Content for Review -->                <h3>Review</h3>                <p>Review content goes here.</p>            </section>            <section class="discussion">                <!-- Content for Discussion -->                <h3>Discussion</h3>                <p>Discussion content goes here.</p>                <style>                    body {                      font-family: Arial, sans-serif;                      margin: 0;                      padding: 0;                      background-color: #f4f4f4;                    }                                    #discussion-board {                      max-width: 600px;                      margin: 20px auto;                      background-color: #fff;                      padding: 20px;                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                    }                                    #message-container {                      margin-bottom: 20px;                    }                                    .message {                      border-bottom: 1px solid #ddd;                      padding: 10px;                    }                                    .message:last-child {                      border-bottom: none;                    }                                    #input-container {                      display: flex;                      margin-top: 20px;                    }                                    #message-input {                      flex: 1;                      padding: 10px;                      border: 1px solid #ddd;                      border-radius: 4px;                    }                                    #post-button {                      padding: 10px;                      background-color: #4caf50;                      color: #fff;                      border: none;                      border-radius: 4px;                      cursor: pointer;                    }                  </style>                <!-- </head> -->                <!-- <body> -->                                <div id="discussion-board">                  <div id="message-container"></div>                                  <div id="input-container">                    <input type="text" id="message-input" placeholder="Type your message...">                    <button id="post-button" onclick="postMessage()">Post</button>                  </div>                </div>                                <script>                  function postMessage() {                    var messageInput = document.getElementById('message-input');                    var messageContainer = document.getElementById('message-container');                                    var messageText = messageInput.value.trim();                    if (messageText !== '') {                      var messageDiv = document.createElement('div');                      messageDiv.className = 'message';                      messageDiv.textContent = messageText;                                      messageContainer.appendChild(messageDiv);                      messageInput.value = '';                    }                  }                </script>                                <!-- </body> -->            </section>        </div>    </div></div>`,`<div class="module-content">Module 2: Prompt Engineering</div>`,`<div class="module-content">Module 3: Generating Content</div>`,`<div class="module-content">Module 4: Recommendation Ideas</div>`,`<div class="module-content">Module 5: High Volume Grading</div>`,`<div class="module-content">Module 6: Manual Review</div>`,
];

// Function to update progress bar, module number, and content
function updateProgress() {
    // Calculate the percentage increase for each module
    const modulePercentage = 100 / totalModules;

    // Increase progress by the module percentage
    progress += modulePercentage;

    // Update progress bar width
    progressBar.style.width = `${progress}%`;

    // Update module number
    moduleNumber++;
    getStartedButton.innerText = `Module ${moduleNumber}`;

    // Update content in the content container
    contentContainer.innerHTML = moduleContent[moduleNumber];
    
    // Show restart button when progress is 100%
    if (progress >= 100) {
        restartButton.style.display = 'inline-block';
    }

    // Store progress and module number in localStorage
    localStorage.setItem('progress', progress);
    localStorage.setItem('moduleNumber', moduleNumber);
}

// Function to handle "Get Started" button click
function handleGetStartedClick() {
    // Check if progress is less than 100% before updating
    if (progress < 100) {
        updateProgress();
    }
}

// Function to handle "Restart" button click
function handleRestartClick() {
    // Reset progress and module number to initial values
    progress = 0;
    moduleNumber = 0;

    // Update progress bar width
    progressBar.style.width = `${progress}%`;

    // Update button text
    getStartedButton.innerText = 'Get Started';

    // Hide the restart button
    restartButton.style.display = 'none';

    // Clear stored progress and module number in localStorage
    localStorage.removeItem('progress');
    localStorage.removeItem('moduleNumber');

    // Reset content in the content container
    contentContainer.innerHTML = moduleContent[moduleNumber];
}

// Add click event listener to the "Get Started" button
getStartedButton.addEventListener('click', handleGetStartedClick);

// Add click event listener to the "Restart" button
restartButton.addEventListener('click', handleRestartClick);

// Display initial content for Module 1
contentContainer.innerHTML = moduleContent[moduleNumber];
