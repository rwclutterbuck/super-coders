const helpers = require("./helpers");

// Fetch all blogs for the homepage
function getAllBlogs() {
  fetch("https://supercodersapi.herokuapp.com/blog")
    .then((r) => r.json())
    // .then(helpers.appendBlogs)  <---  Blogs to automatically import onto the homepage
    .catch(console.warn);
}

// Post to the server upon creation of new blog
function postBlog(e) {
  e.preventDefault();

  console.log(e.target);

  const data = {
    blogtitle: e.target.title.value,
    blogcontent: e.target.content.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  helpers.changeSection();

  fetch("https://supercodersapi.herokuapp.com/blog", options)
    .then((r) => r.json())
    // .then(helpers.updateBtn) <--- Update the form action to take to the page of the newly created blog
    .catch(console.warn);
}

// Post to the server upon creation of new comment
function newComment(e) {
  e.preventDefault();

  const data = {
    blogcomment: e.target.comment.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`)
    .then((r) => r.json())
    // .then(helpers.appendComment)  <---  add the comment to the list on blog.html
    .catch(console.warn);
}

// Retrieve specific blog for blog.html
function getBlog() {
  // let blogId;
  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`)
    .then((r) => r.json())
    // .then(helpers.appendBlogContent)  <---  Add blog content to blog.html when loaded
    .catch(console.warn);
}

// Retrieve all comments for blog.html
function getAllComments() {
  // let blogId;
  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}/comment`)
    .then((r) => r.json())
    // .then(helpers.appendComments)  <---  Add all comments to blog.html when loaded
    .catch(console.warn);
}

// Update server after reaction with an emoji
function updateEmojis(e) {
  e.preventDefault();

  // let blogId;
  // let emojiId;

  // const data = {};  ----Dont need to send any data. Retrieve all info from emojiId-----

  const options = {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    `https://supercodersapi.herokuapp.com/blog/${blogId}/emoji/${emojiId}`,
    options
  )
    .then((r) => r.json())
    // .then(helpers.updateEmoji)
    .catch(console.warn);
}

// Delete a blog
// --------------- Not sure what to do with this as I don't know where we're deleting blogs from ----------------------
function deleteBlog() {
  // let blogId = getBlogId();

  const options = {
    method: "DELETE",
  };

  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`, options).catch(
    console.warn
  );
}

module.exports = {
  getAllBlogs,
  postBlog,
  newComment,
  getBlog,
  getAllComments,
  updateEmojis,
  deleteBlog,
};
