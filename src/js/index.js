// Templates
require("./templates/navBarTemplate");
require("./templates/footerTemplate");
const blogCard = require("./templates/cardTemplate");
const blog = require("./templates/blogTemplate");
const { postBlog } = require("./handlers");
const { getAllBlogs, postBlog } = require("./handlers");

const hamburger = document.querySelector('[aria-label="toggle menu"]');
const menu = document.querySelector("#dropdown-menu");
const cardContainer = document.querySelector("#card-container");
const blogContainer = document.querySelector("#blog-container");
const blogPreview = document.querySelector("#blog-preview");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  menu.classList.toggle("hide-menu");
});

const form = document.querySelector("form");
form && form.addEventListener("submit", postBlog);

blogContainer && (blogContainer.innerHTML = blog());
blogPreview && (blogPreview.innerHTML = blogCard());

// Delete all of below once api is connected
if (cardContainer) {
  cardContainer.innerHTML += blogCard(
    "I Built A Successful Blog In One Year",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
    parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
    egestas quam volutpat viverra. In pretium nec senectus erat. Et
    malesuada lobortis.`,
    "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  );

  cardContainer.innerHTML += blogCard(
    "Testing",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
    parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
    egestas quam volutpat viverra. In pretium nec senectus erat. Et
    malesuada lobortis.`,
    "/src/images/splash-screen.jpg"
  );

  cardContainer.innerHTML += blogCard(
    "I Built A Successful Blog In One Year",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
    parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
    egestas quam volutpat viverra. In pretium nec senectus erat. Et
    malesuada lobortis.`,
    "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  );

  cardContainer.innerHTML += blogCard(
    "Testing",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
    parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
    egestas quam volutpat viverra. In pretium nec senectus erat. Et
    malesuada lobortis.`,
    "/src/images/splash-screen.jpg"
  );

  cardContainer.innerHTML += blogCard(
    "I Built A Successful Blog In One Year",
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
    parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
    egestas quam volutpat viverra. In pretium nec senectus erat. Et
    malesuada lobortis.`,
    "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  );

cardContainer.innerHTML += blogCard(
  "Testing",
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
  egestas quam volutpat viverra. In pretium nec senectus erat. Et
  malesuada lobortis.`,
  "/src/images/splash-screen.jpg"
);

getAllBlogs();
