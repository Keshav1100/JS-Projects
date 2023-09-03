const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("share-as-tweet");
const quoteToShare = document.querySelector("blockquote");
async function getNewQuote() {
  const link = "https://api.quotable.io/random";
  const response = await fetch(link);
  const quoteContent = await response.json();
  quote.innerHTML = `&#10077; ${quoteContent["content"]} &#10078;`;
  quoteAuthor.innerText = `- ${quoteContent["author"]}`;
}

function shareTweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quoteToShare.innerText}`,
    "Share Tweet",
    "popup"
  );
}
getNewQuote();

newQuoteBtn.addEventListener("click", getNewQuote);

tweetBtn.addEventListener("click", shareTweet);
