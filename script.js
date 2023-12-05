// Get elements from the DOM
const progressBar = document.getElementById('myProgressBar');
const getStartedButton = document.getElementById('getStartedBtn');
const restartButton = document.getElementById('restartBtn');
const backButton = document.getElementById('backBtn');
const contentContainer = document.querySelector('.text-images-container');

// Retrieve stored progress and module number from localStorage
let progress = 0;

// inspect >> more options >> application >> storage (clear all)
localStorage.clear();
let moduleNumber = parseInt(localStorage.getItem('moduleNumber')) || 0;
const totalModules = 6;

// Content for each module
const moduleContent = [
    `<!-- TODO: the styling is somewhat plain, we could dress this up with some css (keep consistent between the module pages) --><!-- TODO: we could benefit from a summary of what these modules are (hint: target the audience) and add some AI generated images (could take inspiration from mock ups in proposal) --><!-- TODO: we could benefit from a motivation page that explains why this course is worth doing, this could be a good place for more academic research and ethos to our module --><!-- https://kpeters40.wixsite.com/clip-animal-conserva/courses --><div class="text-images-container">    <!-- Table of Contents -->    <!-- Content for each module -->    <div class="module-content" id="moduleContent">        <h1>Welcome to Fluent Future!</h1>    </div>        <div class="table-container">        <table class="table-of-contents">            <tr>                <th>Table of Contents</th>            </tr>            <tr>                <td>Module 1: Large Language Model Types</td>            </tr>            <tr>                <td>Module 2: Prompt Engineering</td>            </tr>            <tr>                <td>Module 3: Generating Content</td>            </tr>            <tr>                <td>Module 4: Recommendation Ideas</td>            </tr>            <tr>                <td>Module 5: High Volume Grading</td>            </tr>            <tr>                <td>Module 6: Manual Review</td>            </tr>        </table>    </div>    <div class="module-content" id="moduleContent">        <h1>Motivation</h1>        <p>Fluent Future is an interactive educational website designed for introductory-            level language instructors, focusing on utilizing how they can use Large Language Models (LLMs) to enhance            language immersion.        </p>        <p>The application of cutting edge technology such as LLMs to this domain was motivated by a decade long study            completed by the National Center for Education Statistics. They measured a 3.5% year-over-year increase in            high school students' enrollment in foreign language classes over the last decade. Most notably, Spanish language            enrollment reached 70% by the last year, while language retention outside the classroom stagnated at 10% (Digest            of Education Statistics, 2019). The primary goal of these training modules is inform instructors about LLMs and            how they can use them to augment the teaching experience.        </p>        <p class="centered-text">Press the button to get started!        </p>    </div></div>`,`<div class="module-content">    <h2>Module 1: LLM Types</h2>    <div class="sections-container">      <div class="full-width">        <section class="review">          <!-- Content for Review -->          <h3>Overview</h3>          <p>There are two main types of Artificial Intelligence (AI) models: probabilistic and rule-based AI. LLMs can be built on top of either one of these AI models. Each approach has its own strengths and weaknesses that are important to consider.</p>        </section>      </div>        <div class="side-by-side">            <section class="pros">                <h3>Probabilistic AI</h3>                <p>Probabilistic AI uses its best guess to determine what word comes next. The most popular probabilistic LLM is ChatGPT which you can try for free online (chat.openai.com). Probabilistic models have been designed to output a series of most probable words one at a time, based on a large amount of data that it has been trained on. Since probabilistic models are always giving their best guess, it means they do not fully understand what they are generating. Instead, they are generating content based on patterns they may have seen before without comprehending what they write. This is useful for more enriched and creative output, and allows the LLMs to recognize nuanced human input. However, it is common for probabilistic LLMs to "hallucinate" which is a term that means the LLM starts to build its own beliefs about facts that are simply not true. Below, is one such example is ChatGPT mistakenly thinking there are multiple occurrences of the letter "e" in "mississippi", while understanding a malformed query from the user.</p>            </section>            <section class="cons">                <h3>Rule-Based AI</h3>                <p>Rule-Based AI models rely on hard-coded rules to evaluate text. Currently, there are no popular free online LLMs that use a rule-based AI. Typically, if a rule based AI is needed, a custom hybrid model is created that combines a set of rules that have to be enforced and a probabilistic model. This is because instead of guessing the next word based on probability, these models recognize language structures such as grammar rules and formulate responses. They are less prone to hallucinating, however it requires a large undertaking to teach a model all the grammar and language rules. If you have small set of grammar rules you can request the LLM to adhere to those rules. This could be useful for evaluating the correctness of the students' writing automatically.</p>            </section>        </div>        <!-- TODO: image of chatGPT recognizing a question from a person, which is slightly malformed -->        <div class="gpt-image-container">        </div>                <div class="full-width">            <section class="discussion">                <!-- Content for Discussion -->                <h3>Discussion</h3>                <style>                    body {                      font-family: 'Red Hat Display', sans-serif;                      margin: 0;                      padding: 0;                      /* background-color: #f4f4f4; */                    }                                    #discussion-board {                      max-width: 600px;                      margin: 20px auto;                      background-color: #fff;                      padding: 20px;                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                      border-radius: 4px;                    }                                    #message-container {                      margin-bottom: 20px;                    }                                    .message {                      border-bottom: 1px solid #ddd;                      padding: 10px;                    }                                    .message:last-child {                      border-bottom: none;                    }                                    #input-container {                      display: flex;                      margin-top: 10px;                      gap: 10px;                                          }                                    #message-input {                      flex: 1;                      padding: 10px;                      border: 1px solid #ddd;                      border-radius: 4px;                      font-family: 'Red Hat Display', sans-serif;                    }                                    #post-button {                      padding: 10px;                      margin: 5px auto;                      background-color: #36029e;                      color: #fff;                      border: none;                      border-radius: 4px;                      cursor: pointer;                    }                    #fake-post{                      max-width: 600px;                      margin: 0px auto;                      background-color: #ffffff;                      padding: 15px;                      /* border: solid; */                      border: 2px solid #36029e; /* Border color */                      border-radius: 10px; /* Adjust the border-radius for rounded corners */                      text-align: left;                    }                                        #output {                      max-width: 600px;                      margin: 0px auto;                      background-color: #ffffff;                      padding: 15px;                      text-align: left;                    }                    .bordered {                      border: 2px solid #36029e; /* Border color */                      border-radius: 10px; /* Adjust the border-radius for rounded corners */                    }                  </style>                <!-- </head> -->                <!-- <body> -->                <p id="fake-post"><i>User123:</i> I have found that the pros of a probabilistic LLM outweigh the cons! This is because there are a lot of introductory level grammar concepts and guides online so ChatGPT has been trained on a large dataset of them. This makes its guessing very effective!</p>                <p id="output"></p>                <div id="discussion-board">                  <div id="message-container">Post a Reply!</div>                                  <div id="input-container">                    <input type="text" id="message-input" placeholder="Type your message...">                    <button id="post-button" onclick="createPost()">Post</button>                  </div>                </div>                                                                <!-- </body> -->            </section>        </div>    </div></div>`,`<div class="module-content">    <h2>Module 2: Prompt Engineering</h2>    <div class="sections-container">      <div class="full-width">        <section class="review">          <!-- Content for Review -->          <h3>Overview</h3>          <p>Prompt engineering is a critical part of using LLMs. You will interact with LLMs by providing it with some text which is called a prompt and it will respond. Depending on the prompt the quality of the response will vary. There are different strategies for prompt engineering.        </p>        </section>      </div>        <div class="side-by-side">            <section class="pros">                <h3>Iterative Prompting</h3>                <!-- TODO: find some examples of tools that use probabilistic methods, add an AI generated image to demonstrate this, maybe link to an article -->                <p> Iterative prompting involves starting with a broad question and then refining it over many attempts to get the desired result. Let's take a look at an example below: </p>                    <p><b><i>Iteration 1: Broad Request</i></b></p>                                        <p>                    <i>Student:</i> "Can you help me learn some new words in French?"                    <br> <br> In response to this broad request, the language model might generate a list of common French words with their English translations.                              <p><b><i>Iteration 2: Specific Vocabulary Category</i></b></p>                    <i>Student:</i>  "I'm interested in learning vocabulary related to food. Can you give me some French words for different types of food?"                    <br> <br> Now, the user refines the request to focus on a specific category, in this case, vocabulary related to food.                                <p><b><i>Iteration 3: Further Refinement with Context</i></b></p>                    <i>Student:</i>  "Great! Can you now provide me with phrases or sentences that involve the food vocabulary? For example, use these words in a sentence about ordering food in a restaurant."                    <br> <br> Here, the user not only narrows down the focus to sentences but also adds a context, asking for practical usage in a restaurant scenario.                     <hr>                        Through these iterations, the language model adapts to the user's learning preferences and provides increasingly specific and targeted language learning material. The user's feedback and refinement help tailor the language learning experience to their needs, making the process more interactive and personalized.                    </p>            </section>            <section class="cons">                <!-- TODO: find some examples of tools that use rule-base ai, add an ai generated image to demonstrate this, maybe link to an article -->                <h3>Single Use Prompts</h3>                <p><b><i>Individual Request</i></b></p>                <p>Single use prompts involves the practice of defining all the details and constraints of the question at once. Let's take a look at an example below:                    <i>Teacher:</i>  "Can you write an essay prompt for students to practice new french food vocabulary in the attached file. Make sure that the scenario is detailed enough for students to be able to use all the words. Make sure that students are able to practice past tense sentence structure"                    <hr>                        In this single-use prompt, the user provides all the necessary details and constraints at once, including the setting (ancient library), the theme (time travel), and specific elements (transported to a historical moment). The model is expected to generate a creative writing prompt based on these instructions.                        Single-use prompts are efficient when the user has a clear idea of what they want and can articulate the request with sufficient detail in a single interaction. This approach is particularly useful for tasks where the user doesn't need multiple rounds of refinement and wants to receive a response that adheres to specific criteria provided upfront.                </p>            </section>        </div>        <h3>ChatGPT Demo</h3>        <!-- EXMPLE -->        <div id="chat-container">          <iframe id="chat-iframe" src="https://chat.openai.com/share/c600730d-0c2e-4ab3-9250-4a6d116e0e93" allow="autoplay"></iframe>        </div>                <div class="full-width">          <section class="discussion">              <!-- Content for Discussion -->              <h3>Discussion</h3>                            <style>                  body {                    font-family: 'Red Hat Display', sans-serif;                    margin: 0;                    padding: 0;                    /* background-color: #f4f4f4; */                  }                                #discussion-board {                    max-width: 600px;                    margin: 20px auto;                    background-color: #fff;                    padding: 20px;                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                    border-radius: 4px;                  }                                #message-container {                    margin-bottom: 20px;                  }                                .message {                    border-bottom: 1px solid #ddd;                    padding: 10px;                  }                                .message:last-child {                    border-bottom: none;                  }                                #input-container {                    display: flex;                    margin-top: 10px;                    gap: 10px;                                      }                                #message-input {                    flex: 1;                    padding: 10px;                    border: 1px solid #ddd;                    border-radius: 4px;                    font-family: 'Red Hat Display', sans-serif;                  }                                #post-button {                    padding: 10px;                    margin: 5px auto;                    background-color: #36029e;                    color: #fff;                    border: none;                    border-radius: 4px;                    cursor: pointer;                  }                  #fake-post{                    max-width: 600px;                    margin: 0px auto;                    background-color: #ffffff;                    padding: 15px;                    /* border: solid; */                    border: 2px solid #36029e; /* Border color */                    border-radius: 10px; /* Adjust the border-radius for rounded corners */                    text-align: left;                  }                                    #output {                    max-width: 600px;                    margin: 0px auto;                    background-color: #ffffff;                    padding: 15px;                    text-align: left;                  }                  .bordered {                    border: 2px solid #36029e; /* Border color */                    border-radius: 10px; /* Adjust the border-radius for rounded corners */                  }                </style>              <!-- </head> -->                            <!-- <body> -->              <p id="fake-post"><i>User562:</i> Based on the sample ChatGPT conversations that used both scenarios, it seems like the iterative approach lets me have fine grained approach, while the individual request lets me accomplish a task quickly. I'll have to find a balance between these two!</p>              <p id="output"></p>              <div id="discussion-board">                <div id="message-container">Post a Reply!</div>                              <div id="input-container">                  <input type="text" id="message-input" placeholder="Type your message...">                  <button id="post-button" onclick="createPost()">Post</button>                </div>              </div>              <!-- </body> -->          </section>      </div>    </div></div>`,`<div class="module-content">Module 3: Generating Content    <div class="full-width">        <section class="discussion">            <!-- Content for Discussion -->            <h3>Discussion</h3>            <style>                body {                  font-family: 'Red Hat Display', sans-serif;                  margin: 0;                  padding: 0;                  /* background-color: #f4f4f4; */                }                            #discussion-board {                  max-width: 600px;                  margin: 20px auto;                  background-color: #fff;                  padding: 20px;                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                  border-radius: 4px;                }                            #message-container {                  margin-bottom: 20px;                }                            .message {                  border-bottom: 1px solid #ddd;                  padding: 10px;                }                            .message:last-child {                  border-bottom: none;                }                            #input-container {                  display: flex;                  margin-top: 10px;                  gap: 10px;                                  }                            #message-input {                  flex: 1;                  padding: 10px;                  border: 1px solid #ddd;                  border-radius: 4px;                  font-family: 'Red Hat Display', sans-serif;                }                            #post-button {                  padding: 10px;                  margin: 5px auto;                  background-color: #36029e;                  color: #fff;                  border: none;                  border-radius: 4px;                  cursor: pointer;                }                #fake-post{                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  /* border: solid; */                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                  text-align: left;                }                                #output {                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  text-align: left;                }                .bordered {                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                }              </style>            <!-- </head> -->            <!-- <body> -->            <p id="fake-post"><i>User123:</i> I have found that the pros of a probabilistic LLM outweigh the cons! This is because there are a lot of introductory level grammar concepts and guides online so ChatGPT has been trained on a large dataset of them. This makes its guessing very effective!</p>            <p id="output"></p>            <div id="discussion-board">              <div id="message-container">Post a Reply!</div>                          <div id="input-container">                <input type="text" id="message-input" placeholder="Type your message...">                <button id="post-button" onclick="createPost()">Post</button>              </div>            </div>                                                <!-- </body> -->        </section>    </div></div>`,`<div class="module-content">Module 4: Recommendation Ideas    <div class="full-width">        <section class="discussion">            <!-- Content for Discussion -->            <h3>Discussion</h3>            <style>                body {                  font-family: 'Red Hat Display', sans-serif;                  margin: 0;                  padding: 0;                  /* background-color: #f4f4f4; */                }                            #discussion-board {                  max-width: 600px;                  margin: 20px auto;                  background-color: #fff;                  padding: 20px;                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                  border-radius: 4px;                }                            #message-container {                  margin-bottom: 20px;                }                            .message {                  border-bottom: 1px solid #ddd;                  padding: 10px;                }                            .message:last-child {                  border-bottom: none;                }                            #input-container {                  display: flex;                  margin-top: 10px;                  gap: 10px;                                  }                            #message-input {                  flex: 1;                  padding: 10px;                  border: 1px solid #ddd;                  border-radius: 4px;                  font-family: 'Red Hat Display', sans-serif;                }                            #post-button {                  padding: 10px;                  margin: 5px auto;                  background-color: #36029e;                  color: #fff;                  border: none;                  border-radius: 4px;                  cursor: pointer;                }                #fake-post{                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  /* border: solid; */                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                  text-align: left;                }                                #output {                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  text-align: left;                }                .bordered {                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                }              </style>            <!-- </head> -->            <!-- <body> -->            <p id="fake-post"><i>User123:</i> I have found that the pros of a probabilistic LLM outweigh the cons! This is because there are a lot of introductory level grammar concepts and guides online so ChatGPT has been trained on a large dataset of them. This makes its guessing very effective!</p>            <p id="output"></p>            <div id="discussion-board">              <div id="message-container">Post a Reply!</div>                          <div id="input-container">                <input type="text" id="message-input" placeholder="Type your message...">                <button id="post-button" onclick="createPost()">Post</button>              </div>            </div>                                                <!-- </body> -->        </section>    </div></div>`,`<div class="module-content">Module 5: High Volume Grading    <div class="full-width">        <section class="discussion">            <!-- Content for Discussion -->            <h3>Discussion</h3>            <style>                body {                  font-family: 'Red Hat Display', sans-serif;                  margin: 0;                  padding: 0;                  /* background-color: #f4f4f4; */                }                            #discussion-board {                  max-width: 600px;                  margin: 20px auto;                  background-color: #fff;                  padding: 20px;                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                  border-radius: 4px;                }                            #message-container {                  margin-bottom: 20px;                }                            .message {                  border-bottom: 1px solid #ddd;                  padding: 10px;                }                            .message:last-child {                  border-bottom: none;                }                            #input-container {                  display: flex;                  margin-top: 10px;                  gap: 10px;                                  }                            #message-input {                  flex: 1;                  padding: 10px;                  border: 1px solid #ddd;                  border-radius: 4px;                  font-family: 'Red Hat Display', sans-serif;                }                            #post-button {                  padding: 10px;                  margin: 5px auto;                  background-color: #36029e;                  color: #fff;                  border: none;                  border-radius: 4px;                  cursor: pointer;                }                #fake-post{                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  /* border: solid; */                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                  text-align: left;                }                                #output {                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  text-align: left;                }                .bordered {                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                }              </style>            <!-- </head> -->            <!-- <body> -->            <p id="fake-post"><i>User123:</i> I have found that the pros of a probabilistic LLM outweigh the cons! This is because there are a lot of introductory level grammar concepts and guides online so ChatGPT has been trained on a large dataset of them. This makes its guessing very effective!</p>            <p id="output"></p>            <div id="discussion-board">              <div id="message-container">Post a Reply!</div>                          <div id="input-container">                <input type="text" id="message-input" placeholder="Type your message...">                <button id="post-button" onclick="createPost()">Post</button>              </div>            </div>                                                <!-- </body> -->        </section>    </div></div>`,`<div class="module-content">Module 6: Manual Review    <div class="full-width">        <section class="discussion">            <!-- Content for Discussion -->            <h3>Discussion</h3>            <style>                body {                  font-family: 'Red Hat Display', sans-serif;                  margin: 0;                  padding: 0;                  /* background-color: #f4f4f4; */                }                            #discussion-board {                  max-width: 600px;                  margin: 20px auto;                  background-color: #fff;                  padding: 20px;                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);                  border-radius: 4px;                }                            #message-container {                  margin-bottom: 20px;                }                            .message {                  border-bottom: 1px solid #ddd;                  padding: 10px;                }                            .message:last-child {                  border-bottom: none;                }                            #input-container {                  display: flex;                  margin-top: 10px;                  gap: 10px;                                  }                            #message-input {                  flex: 1;                  padding: 10px;                  border: 1px solid #ddd;                  border-radius: 4px;                  font-family: 'Red Hat Display', sans-serif;                }                            #post-button {                  padding: 10px;                  margin: 5px auto;                  background-color: #36029e;                  color: #fff;                  border: none;                  border-radius: 4px;                  cursor: pointer;                }                #fake-post{                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  /* border: solid; */                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                  text-align: left;                }                                #output {                  max-width: 600px;                  margin: 0px auto;                  background-color: #ffffff;                  padding: 15px;                  text-align: left;                }                .bordered {                  border: 2px solid #36029e; /* Border color */                  border-radius: 10px; /* Adjust the border-radius for rounded corners */                }              </style>            <!-- </head> -->            <!-- <body> -->            <p id="fake-post"><i>User123:</i> I have found that the pros of a probabilistic LLM outweigh the cons! This is because there are a lot of introductory level grammar concepts and guides online so ChatGPT has been trained on a large dataset of them. This makes its guessing very effective!</p>            <p id="output"></p>            <div id="discussion-board">              <div id="message-container">Post a Reply!</div>                          <div id="input-container">                <input type="text" id="message-input" placeholder="Type your message...">                <button id="post-button" onclick="createPost()">Post</button>              </div>            </div>                                                <!-- </body> -->        </section>    </div></div>`,
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
    if (moduleNumber === totalModules) {
        getStartedButton.style.display = 'none';
    } else {
        getStartedButton.style.display = 'inline-block';
    }
    
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

    // Initial update of the back button visibility
    updateBackButton();
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
    getStartedButton.style.display = 'inline-block';

    // Hide the restart button
    restartButton.style.display = 'none';

    // Clear stored progress and module number in localStorage
    localStorage.removeItem('progress');
    localStorage.removeItem('moduleNumber');

    // Reset content in the content container
    contentContainer.innerHTML = moduleContent[moduleNumber];

    backButton.style.display = 'none';

}

// Show or hide the back button based on the module number
function updateBackButton() {
    console.log('Module Number:', moduleNumber);
    console.log('Back Button Display:', moduleNumber === 0 ? 'none' : 'inline-block');
    backButton.style.display = moduleNumber === 0 ? 'none' : 'inline-block';
}

// Function to update progress, module number, and content when going back
function goBack() {
    // Check if module number is greater than 0
    if (moduleNumber > 0) {
        // Decrease module number
        moduleNumber--;

        // Update content in the content container
        contentContainer.innerHTML = moduleContent[moduleNumber];

        // Update progress bar width
        progress -= 100 / totalModules;
        if (progress < 0) {
            progress = 0;
        }
        progressBar.style.width = `${progress}%`;

        // Update "Get Started" button text
        getStartedButton.innerText = moduleNumber === 0 ? 'Get Started' : `Module: ${moduleNumber}`;
        
        
        if (moduleNumber === totalModules) {
            getStartedButton.style.display = 'none';
        } else {
            getStartedButton.style.display = 'inline-block';
        }

        restartButton.style.display = 'none';
        // Show or hide the back button based on the module number
        updateBackButton();

        // Update localStorage
        localStorage.setItem('moduleNumber', moduleNumber);
        localStorage.setItem('progress', progress);
    } 
}

// Initial update of the back button visibility
// updateBackButton();

// Add click event listener to the "Back" button
backButton.addEventListener('click', goBack);

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
