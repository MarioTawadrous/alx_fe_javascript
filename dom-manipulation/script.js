let quoteDisplay = document.getElementById("quoteDisplay");
let quoteButton = document.getElementById("newQuote");

// let quotes = [{ id: 1, category: "", text: "" }];

const quotes = [
  {
    category: "Motivation",
    text: "The only way to do great work is to love what you do.",
  },
  {
    category: "Motivation",
    text: "Believe you can and you're halfway there.",
  },
  {
    category: "Inspiration",
    text: "In the middle of every difficulty lies opportunity.",
  },
  {
    category: "Inspiration",
    text: "The best way to predict the future is to create it.",
  },
  {
    category: "Life",
    text: "Life is 10% what happens to us and 90% how we react to it.",
  },
  {
    category: "Life",
    text: "The purpose of our lives is to be happy.",
  },
  {
    category: "Success",
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    category: "Success",
    text: "Don't be afraid to give up the good to go for the great.",
  },
  {
    category: "Wisdom",
    text: "The only true wisdom is in knowing you know nothing.",
  },
  {
    category: "Wisdom",
    text: "Knowing yourself is the beginning of all wisdom.",
  },
];

let showRandomQuote = function () {
  console.log("Show New Button is clicked");
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];

  quoteDisplay.innerHTML = `<p>Quote category: ${randomQuote.category}</p>
  <p>Quote: ${randomQuote.text}</p>`;
  return quotes[random];
};

let createAddQuoteForm = function () {};

quoteButton.addEventListener("click", showRandomQuote);

