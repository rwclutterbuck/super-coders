(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { changeSection } = require("./helpers");

function postBlog(e) {
  e.preventDefault();

  const data = {
    title: e.target.title.value,
    blog: e.target.blog.value,
  };

  // const options = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //         "Content-Type": "application/json"
  //     }
  // }

  changeSection();

  // fetch('#', options)
  //   .then(r => r.json())
  //   .then(changeButton)
  //   .catch(console.warn)
}

module.exports = { postBlog };

},{"./helpers":2}],2:[function(require,module,exports){
function changeSection() {
  const section = document.querySelector('#form-section');
  section.innerHTML = `
    <h1 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Thanks for your Submission!</h1>

    <form action='#' class="mt-6 ">

      <div class="flex justify-center mt-6">
        <input type="submit" class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" value="View Blog"/>
      </div>

    </form>`;
}

module.exports = { changeSection };

},{}],3:[function(require,module,exports){
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

},{"./handlers":1}]},{},[3]);
