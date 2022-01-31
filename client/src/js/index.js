const hamburger = document.querySelector('[aria-label="toggle menu"]');
const menu = document.querySelector('#dropdown-menu');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  menu.classList.toggle('hide-menu');
})
