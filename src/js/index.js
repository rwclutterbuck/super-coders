// Templates
require("./templates/navBarTemplate");
require("./templates/footerTemplate");
const blogCard = require("./templates/cardTemplate");
const handlers = require("./handlers");
const blog = require("./templates/blogTemplate");

const hamburger = document.querySelector('[aria-label="toggle menu"]');
const menu = document.querySelector("#dropdown-menu");
const cardContainer = document.querySelector("#card-container");
const blogContainer = document.querySelector("#blog-container");
const blogPreview = document.querySelector("#blog-preview");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("hide-menu");
});

const form = document.querySelector("form");
form && form.addEventListener("submit", handlers.postBlog);

const location = window.location.pathname;
switch (location) {
  case "/index.html":
    handlers.getAllBlogs();
    break;
  case "/createBlog.html":
    break;
  case "/blog.html":
    handlers.getBlog();
    handlers.getAllComments();
    break;
}

blogContainer && (blogContainer.innerHTML = blog());
blogPreview && (blogPreview.innerHTML = blogCard());

// Delete all of below once api is connected
const data = {
  "1": {
    "blogtitle": "Ostriches dont exist",
    "blogcontent": "Scientists recently discovered that ostriches are just a large form of pigeon....",
    "date": "Sat, 29 Jan 2022 11:45:33 GMT",
    "gif": "",
    "comment": {
      "1": {
        "blogcomment": "Hiiii"
      },
      "2": {
        "blogcomment": "Yoooooo"
      }
    },
    "emoji": {
      "1": {
        "emojiCount": 100
      },
      "2": {
        "emojiCount": 33
      },
      "3": {
        "emojiCount": 11
      }
    }
  },
  "2": {
    "blogtitle": "Are Aliens real?",
    "blogcontent": "I never thought Aliens could be real...",
    "date": "Sun, 30 Jan 2022 10:34:46 GMT",
    "gif": "",
    "comment": {
      "1": {
        "blogcomment": "HAHAHAHAA"
      },
      "2": {
        "blogcomment": "GOOD ONE!!!"
      }
    },
    "emoji": {
      "1": {
        "emojiCount": 67
      },
      "2": {
        "emojiCount": 70
      },
      "3": {
        "emojiCount": 0
      }
    }
  },
  "3": {
    "blogtitle": "My brother believes in Aliens",
    "blogcontent": "...",
    "date": "Mon, 31 Jan 2022 12:04:22 GMT",
    "gif": "",
    "comment": {
      "1": {
        "blogcomment": "Testing"
      },
      "2": {
        "blogcomment": "I am troll"
      }
    },
    "emoji": {
      "1": {
        "emojiCount": 160
      },
      "2": {
        "emojiCount": 3
      },
      "3": {
        "emojiCount": 566
      }
    }
  }
}
if (cardContainer) {
  cardContainer.innerHTML += blogCard(1,data[1]
  );

  cardContainer.innerHTML += blogCard(2,data[2]
  );

  cardContainer.innerHTML += blogCard(3,data[3]
  );
}
