// Templates
require("./templates/navBarTemplate");
require("./templates/footerTemplate");
const blogCard = require("./templates/cardTemplate");
const handlers = require("./handlers");

const hamburger = document.querySelector('[aria-label="toggle menu"]');
const menu = document.querySelector("#dropdown-menu");
const blogPreview = document.querySelector("#blog-preview");

// Add functionality to navbar
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("hide-menu");
});

// Submit form and update page without refresh
const form = document.querySelector("form");
form && form.addEventListener("submit", handlers.postBlog);

// Identify the page in the browser
const location = window.location.pathname;

let blogId;
if (location === "/blog.html") {
  let blog = window.localStorage.getItem("blogId");
  blogId = window.localStorage.getItem(`blogId-${blog}`);
}

// Call fcts depending on the browser page
switch (location) {
  // not a great fix for page not initially loading
  case "/":
  case "/index.html":
    handlers.getAllBlogs();
    break;
  case "/createBlog.html":
    break;
  case "/blog.html":
    handlers.getAllBlogs();
    handlers.getBlog(blogId);
    break;
}

blogPreview && (blogPreview.innerHTML = blogCard());

const numCards = document.querySelector("#card-container").childNodes.length;

const cards = document.getElementsByClassName("blog-card");
// console.log(cards);

cards.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
});

// for (let i = 1; i <= numCards; i++) {
//   let cardId = `#card-link-${i}`;
//   const card = document.querySelector(cardId);
//   // console.log(cardId);
//   // console.log(card);
//   window.localStorage.setItem(`blogId-${i}`, i);
//   card.addEventListener("click", () => {
//     window.localStorage.setItem(`blogId`, i);
//   });
// }
