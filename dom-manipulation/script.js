let quoteDisplay = document.getElementById("quoteDisplay");
let quoteButton = document.getElementById("newQuote");
let addNewQuoteButton = document.getElementById("addNewQuote");
let formDiv = document.getElementById("form");

let inputQuoteText = document.createElement("input");
let inputQuoteCategory = document.createElement("input");
let addQuoteButton = document.createElement("button");

inputQuoteText.type = "text";
inputQuoteText.placeholder = "Enter a New quote";
inputQuoteText.id = "newQuoteText";
// let inputQuoteTextValue = inputQuoteText.value;

inputQuoteCategory.type = "text";
inputQuoteCategory.placeholder = "Enter quote category";
inputQuoteCategory.id = "newQuoteCategory";
// let inputQuoteCategoryValue = inputQuoteCategory.value;

addQuoteButton.innerText = "Add quote";

// quoteDisplay.style.display = "none";
// quoteButton.style.display = "none";
// addNewQuoteButton.style.display = "none";

formDiv.appendChild(inputQuoteText);
formDiv.appendChild(inputQuoteCategory);
formDiv.appendChild(addQuoteButton);
formDiv.style.display = "none";

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
  quoteDisplay.style.display = "block";
  console.log("Show New Button is clicked");
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];

  quoteDisplay.innerHTML = `<p>Quote category: ${randomQuote.category}</p>
  <p>Quote: ${randomQuote.text}</p>`;
  // return quotes[random];
};

let createAddQuoteForm = function () {
  // inputQuoteText.placeholder = "Enter a New quote";
  // inputQuoteText.type = "text";
  // inputQuoteText.id = "newQuoteText";

  // inputQuoteCategory.placeholder = "Enter quote category";
  // inputQuoteCategory.type = "text";
  // inputQuoteCategory.id = "newQuoteCategory";

  // addQuoteButton.innerText = "Add quote";

  quoteDisplay.style.display = "none";
  quoteButton.style.display = "none";
  addNewQuoteButton.style.display = "none";

  // formDiv.appendChild(inputQuoteText);
  // formDiv.appendChild(inputQuoteCategory);
  // formDiv.appendChild(addQuoteButton);

  formDiv.style.display = "block";
};

// let addNewQuote = function (inputQuoteCategoryValue, inputQuoteTextValue) {
let addNewQuote = function () {
  let inputQuoteCategoryValue = inputQuoteCategory.value;
  let inputQuoteTextValue = inputQuoteText.value;

  quotes.push({ category: inputQuoteCategoryValue, text: inputQuoteTextValue });
  console.log(quotes);

  quoteButton.style.display = "block";
  addNewQuoteButton.style.display = "block";
  formDiv.style.display = "none";
  addNewQuoteButton.style.display = "block";
};

quoteButton.addEventListener("click", showRandomQuote);
addNewQuoteButton.addEventListener("click", createAddQuoteForm);

addQuoteButton.addEventListener("click", addNewQuote);
