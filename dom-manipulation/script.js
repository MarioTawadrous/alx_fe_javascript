// in code quotes
/*
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

*/

// Working with local storage

// Initailize quotes array from local storage or as an empty array
let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

// Function to save quotes to local storage
let saveQuotes = function () {
  localStorage.setItem("quotes", JSON.stringify(quotes));
};

// Function to add new quote
let addQuote = function (quote) {
  quotes.push(quote);
  saveQuotes();
};

// function to load quotes on page load
let loadQuotes = function () {
  const stordQuotes = JSON.parse(localStorage.getItem("quotes"));
  if (stordQuotes) {
    quotes = saveQuotes;
  }
};

// Call loadQuotes fumction on page loads
window.load = loadQuotes;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Working with session storage

let currentQuote = null;
let lastViewedQuote = null;

// Function to save last viewed quote in session storage
let saveLastViewedQuote = function () {
  sessionStorage.setItem("lastViewedQuote", JSON.stringify(currentQuote));
};

// Function to retreive last viewed quote from session storage
let loadLastViewedQuote = function () {
  lastViewedQuote = JSON.parse(sessionStorage.getItem("lastViewedQuote"));

  if (lastViewedQuote) {
    quoteDisplay.style.display = "block";
    currentQuote = lastViewedQuote;

    quoteDisplay.innerHTML = `<p>Quote category: ${lastViewedQuote.category}</p>
  <p>Quote: ${lastViewedQuote.text}</p>`;
  }
};

window.load = loadLastViewedQuote; // this does not work on the loading of the page

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                             Working with JSON Data export and import                                      ////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to export quotes as a JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "quotes.json";
  link.click();

  URL.revokeObjectURL(url);
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
    displayQuotes(); // Refresh the displayed quotes
  };
  fileReader.readAsText(event.target.files[0]);
}

// Add a file input to the HTML

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//          Creating a Dynamic Content Filtering System Using Web Storage and JSON          /////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to populate categories in the dropdown
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = [...new Set(quotes.map((quote) => quote.category))]; // Extract unique categories

  // Clear existing options (except "All Categories")
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';

  // Add categories to the dropdown
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Restore the last selected filter
  const lastFilter = localStorage.getItem("lastFilter");
  if (lastFilter) {
    categoryFilter.value = lastFilter;
  }
}

// Function to filter quotes by category
function filterQuotes() {
  const categoryFilter = document.getElementById("categoryFilter");
  const selectedCategory = categoryFilter.value;

  // Save the selected filter to local storage
  localStorage.setItem("lastFilter", selectedCategory);

  // Filter quotes
  const filteredQuotes =
    selectedCategory === "all"
      ? quotes
      : quotes.filter((quote) => quote.category === selectedCategory);

  // Display filtered quotes
  //displayQuotes(filteredQuotes);
}

// Function to load quotes and categories on page load
function loadQuotes() {
  const storedQuotes = JSON.parse(localStorage.getItem("quotes"));
  if (storedQuotes) {
    quotes = storedQuotes;
    populateCategories();
    filterQuotes(); // Apply the last selected filter
  }
}

window.onload = loadQuotes;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

let showRandomQuote = function () {
  quoteDisplay.style.display = "block";
  console.log("Show New Button is clicked");
  let random = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[random];
  currentQuote = randomQuote;

  quoteDisplay.innerHTML = `<p>Quote category: ${randomQuote.category}</p>
  <p>Quote: ${randomQuote.text}</p>`;

  saveLastViewedQuote();
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

  // This for variable quotes within code
  // quotes.push({ category: inputQuoteCategoryValue, text: inputQuoteTextValue });
  console.log(quotes);

  quoteButton.style.display = "block";
  addNewQuoteButton.style.display = "block";
  formDiv.style.display = "none";
  addNewQuoteButton.style.display = "block";

  // This for local storage save
  addQuote({ category: inputQuoteCategoryValue, text: inputQuoteTextValue });
};

quoteButton.addEventListener("click", showRandomQuote);
addNewQuoteButton.addEventListener("click", createAddQuoteForm);

addQuoteButton.addEventListener("click", addNewQuote);
