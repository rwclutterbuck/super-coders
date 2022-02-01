const { changeSection, updateBtn, appendBlogs } = require("./helpers");

function getAllBlogs() {
  fetch("https://supercodersapi.herokuapp.com/blog")
    .then((r) => r.json())
    // .then(appendBlogs)  <---  Blogs to automatically import onto the homepage
    .catch(console.warn);
}

function postBlog(e) {
  e.preventDefault();

  const data = {
    title: e.target.blogtitle.value,
    blog: e.target.blogcontent.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  changeSection();

  fetch("https://supercodersapi.herokuapp.com/blog", options)
    .then((r) => r.json())
    // .then(updateBtn) <--- Update the form action to take to the page of the newly created blog
    .catch(console.warn);
}

module.exports = { getAllBlogs, postBlog };
