//creating the API function
/*function quoteMaker () {
  return  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });

};*/
async function quoteMaker() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return `${data.content} - ${data.author}`;
    } catch (error) {
        console.error('Issue with fetching the quote', error);
        return 'Unable to fetch a quote.';
    }
}

async function generateQuote() {
    const quote = await quoteMaker();
    document.getElementById("quote").innerText = quote;
}

document.getElementById("generate-btn").addEventListener("click", generateQuote);

generateQuote;
