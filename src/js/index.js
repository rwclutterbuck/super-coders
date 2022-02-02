// Templates
require("./templates/navBarTemplate");
require("./templates/footerTemplate");
const blogCard = require("./templates/cardTemplate");
const handlers = require("./handlers");

const hamburger = document.querySelector('[aria-label="toggle menu"]');
const menu = document.querySelector("#dropdown-menu");
const blogPreview = document.querySelector("#blog-preview");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("hide-menu");
});

const form = document.querySelector("form");
form && form.addEventListener("submit", handlers.postBlog);

const location = window.location.pathname;

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
    handlers.getBlog();
    break;
}

blogPreview && (blogPreview.innerHTML = blogCard());
