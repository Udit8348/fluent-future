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
    `<!-- TODO: the styling is somewhat plain, we could dress this up with some css (keep consistent between the module pages) --><!-- TODO: we could benefit from a summary of what these modules are (hint: target the audience) and add some AI generated images (could take inspiration from mock ups in proposal) --><div class="module-content">Welcome to Fluent Future, Press the Button To Begin</div>`,`<div class="module-content">    <h2>Module 1: LLM Types</h2>    <div class="sections-container">      <div class="full-width">        <section class="review">          <!-- Content for Review -->          <h3>Overview</h3>          <p>There are two main types of AI, probabilistic and rule-based AI</p>        </section>      </div>        <div class="side-by-side">            <section class="pros">                <h3>Probabilistic AI</h3>                <!-- TODO: find some examples of tools that use probabilistic methods, add an AI generated image to demonstrate this, maybe link to an article -->                <p>Probabilistic AI uses its best guess on what word comes next. Essentially they have been trained to give a series of the most probable words from a given prompt. They are good at generating text and having conversations. One prominent example is ChatGPT.</p>            </section>            <section class="cons">                <!-- TODO: find some examples of tools that use rule-base ai, add an ai generated image to demonstrate this, maybe link to an article -->                <h3>Rule-Based AI</h3>                <p>Rules-Based AI uses hard-coded rules to evaluate text. Instead of guessing the next word based on probability, these models determine grammar errors and suggest corrections with explanations. They are good for evaluating the correctness of writing. They can also be used to identify parts of speech and tense used.</p>            </section>        </div>                <div class="full-width">            <section class="discussion">                <!-- Content for Discussion -->                <h3>Discussion</h3>                <style>                    body {                      font-family: Arial, sans-serif;                      margin: 0;                      padding: 0;                      background-color: #f4f4f4;                    }                                    #discussion-board {                      max-width: 600px;                      margin: 20px auto;                      background-color: #fff;                      padding: 20px;                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                    }                                    #message-container {                      margin-bottom: 20px;                    }                                    .message {                      border-bottom: 1px solid #ddd;                      padding: 10px;                    }                                    .message:last-child {                      border-bottom: none;                    }                                    #input-container {                      display: flex;                      margin-top: 10px;                      gap: 10px;                    }                                    #message-input {                      flex: 1;                      padding: 10px;                      border: 1px solid #ddd;                      border-radius: 4px;                    }                                    #post-button {                      padding: 10px;                      margin: 5px auto;                      background-color: #4caf50;                      color: #fff;                      border: none;                      border-radius: 4px;                      cursor: pointer;                    }                    #fake-post1{                      max-width: 600px;                      margin: 0px auto;                      background-color: #fff;                      padding: 2px;                      border: solid;                      text-align: left;                    }                                        #output {                      max-width: 600px;                      margin: 0px auto;                      background-color: #fff;                      padding: 2px;                      text-align: left;                    }                    .bordered {                      border: solid; /* You can adjust the color as needed */                    }                  </style>                <!-- </head> -->                <!-- <body> -->                <p id="fake-post1">Discussion content goes here.</p>                <p id="output"></p>                <div id="discussion-board">                  <div id="message-container"></div>                                  <div id="input-container">                    <input type="text" id="message-input" placeholder="Type your message...">                    <button id="post-button" onclick="createPost()">Post</button>                  </div>                </div>                                                                <!-- </body> -->            </section>        </div>    </div></div>`,`<div class="module-content">Module 2: Prompt Engineering</div>`,`<div class="module-content">Module 3: Generating Content</div>`,`<div class="module-content">Module 4: Recommendation Ideas</div>`,`<div class="module-content">Module 5: High Volume Grading</div>`,`<div class="module-content">Module 6: Manual Review</div>`,
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

function createPost() {
                    
    var messageInput = document.getElementById('message-input');
    var messageContainer = document.getElementById('message-container');
    var paragraph = document.getElementById('output');
    var messageText = messageInput.value.trim();
    if (messageText !== '') {
      paragraph.innerText = messageText;
      document.getElementById('message-input').value = '';
      paragraph.classList.add('bordered');
    }
}
// Display initial content for Module 1
contentContainer.innerHTML = moduleContent[moduleNumber];
