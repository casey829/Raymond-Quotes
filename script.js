/*let likeCount = 0;
  let dislikeCount = 0;

  function like() {
    likeCount++;
    document.getElementById('like-count').textContent = likeCount;
  }

  function dislike() {
    dislikeCount++;
    document.getElementById('dislike-count').textContent = dislikeCount;
  }

// Function to fetch a random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch("http://localhost:3000/quotes");
        const data = await response.json();
        // Check if data is not empty and contains quotes
        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            return `"${randomQuote.quote}" - ${randomQuote.author}`;
        } else {
            return 'No quotes available.';
        }
    } catch (error) {
        console.error('Issue with fetching the quote', error);
        return 'Unable to fetch a quote.';
    }
}

// Function to generate a new quote when  button is clicked
async function generateQuote() {
    const quote = await fetchQuote();
    document.getElementById("quote").innerText = quote;
}

// Event listener for the button click to generate a new quote
document.getElementById("generate-btn").addEventListener("click", generateQuote);

// Function to start with an empty quote display when the page loads
function startWithEmptyQuote() {
    document.getElementById("quote").innerText = 'Press the button for some Raymond wisdom.';
}

// Call the function to start with an empty quote display
startWithEmptyQuote();*/
let likeCount = 0;
let dislikeCount = 0;

function like() {
  likeCount++;
  document.getElementById('like-count').textContent = likeCount;
}

function dislike() {
  dislikeCount++;
  document.getElementById('dislike-count').textContent = dislikeCount;
}

// Function to fetch a random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch("http://localhost:3000/quotes");
        const data = await response.json();
        // Check if data is not empty and contains quotes
        if (data && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            return `"${randomQuote.quote}" - ${randomQuote.author}`;
        } else {
            return 'No quotes available.';
        }
    } catch (error) {
        console.error('Issue with fetching the quote', error);
        return 'Unable to fetch a quote.';
    }
}

// Function to generate a new quote when button is clicked
async function generateQuote() {
    // Reset like and dislike counts to 0
    likeCount = 0;
    dislikeCount = 0;
    document.getElementById('like-count').textContent = likeCount;
    document.getElementById('dislike-count').textContent = dislikeCount;

    const quote = await fetchQuote();
    document.getElementById("quote").innerText = quote;
}

// Event listener for the button click to generate a new quote
document.getElementById("generate-btn").addEventListener("click", generateQuote);

// Function to start with an empty quote display when the page loads
function startWithEmptyQuote() {
    document.getElementById("quote").innerText = 'Press the button for some Raymond wisdom.';
}

// Call the function to start with an empty quote display
startWithEmptyQuote();

