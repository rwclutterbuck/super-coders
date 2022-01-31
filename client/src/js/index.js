const { postBlog } = require('./handlers');

const hamburger = document.querySelector('[aria-label="toggle menu"]');
const menu = document.querySelector('#dropdown-menu');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  menu.classList.toggle('hide-menu');
})

const form = document.querySelector('form');
form.addEventListener('submit', postBlog)
