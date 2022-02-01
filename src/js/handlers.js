const {
  changeSection,
  updateBtn,
  appendBlogs,
  appendComment,
  appendComments,
  appendBlogContent,
  getBlogId,
  getEmojiId,
} = require("./helpers");

// Fetch all blogs for the homepage
function getAllBlogs() {
  fetch("https://supercodersapi.herokuapp.com/blog")
    .then((r) => r.json())
    // .then(appendBlogs)  <---  Blogs to automatically import onto the homepage
    .catch(console.warn);
}

// Post to the server upon creation of new blog
function postBlog(e) {
  e.preventDefault();

  const data = {
    blogtitle: e.target.title.value,
    blogcontent: e.target.blog.value,
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

  // let blogId = getBlogId();  <---  Need to identify which blog we are posting on to

  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`)
    .then((r) => r.json())
    // .then(appendComment)  <---  add the comment to the list on blog.html
    .catch(console.warn);
}

// Retrieve specific blog for blog.html
function getBlog() {
  // let blogId = getBlogId();
  fetch("https://supercodersapi.herokuapp.com/blog/${blodId}")
    .then((r) => r.json())
    // .then(appendBlogContent)  <---  Add blog content to blog.html when loaded
    .catch(console.warn);
}

// Retrieve all comments for blog.html
function getAllComments() {
  // let blogId = getBlogId();
  fetch(`https://supercodersapi.herokuapp.com/blog/${blodId}/comment`)
    .then((r) => r.json())
    // .then(appendComments)  <---  Add all comments to blog.html when loaded
    .catch(console.warn);
}

// Update server after reaction with an emoji
function updateEmojis(e) {
  e.preventDefault();

  // let blogId = getBlogId();
  // let emojiId = getEmojiId();

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
    .then(updateEmoji)
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
