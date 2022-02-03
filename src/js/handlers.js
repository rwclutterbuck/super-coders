const helpers = require("./helpers");

// Fetch all blogs for the homepage
function getAllBlogs() {
  fetch("https://supercodersapi.herokuapp.com/blog")
    .then((r) => r.json())
    .then(helpers.appendBlogs)
    .catch(console.warn);
}

// Post to the server upon creation of new blog
const postBlog = async (e) => {
  e.preventDefault();
  let gifID = e.target.gif.value;

  // Fetch gif according to requested id
  let result = await (
    await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=rZze5Ana60111aVYD7ZlwgzZnD5Zzu0b&limit=1&q=${gifID}`
    )
  ).json();

  const data = {
    blogtitle: e.target.title.value,
    blogcontent: e.target.blog.value,
    gif: result.data["0"].images.original.webp,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Update page after form submission
  helpers.changeSection();

  fetch("https://supercodersapi.herokuapp.com/blog", options)
    .then((r) => r.json())
    .catch(console.warn);
};

// Post to the server upon creation of new comment
function newComment(e) {
  e.preventDefault();
  const comment = e.target.comment.value;
  const obj = {
    timestamp: "now",
    blogcomment: comment,
  };

  // Dynamically set ID for new comments
  const numComments = document.querySelectorAll(".blogComment").length;
  const ID = numComments + 1;
  helpers.appendComment(obj, ID);

  // Reset text area after form submission
  const textArea = document.querySelector("#comment");
  textArea.value = "";

  const data = {
    blogcomment: comment,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const blogId = window.sessionStorage.getItem("blogID");

  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`, options)
    .then((r) => r.json())
    .catch(console.warn);
}

// Retrieve specific blog for blog.html
function getBlog(blogId) {
  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`)
    .then((r) => r.json())
    .then(helpers.appendBlogContent)
    .catch(console.warn);
}

// Retrieve all comments for blog.html
// function getAllComments() {
//   // let blogId;
//   fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}/comment`)
//     .then((r) => r.json())
//     // .then(helpers.appendComments)  <---  Add all comments to blog.html when loaded
//     .catch(console.warn);
// }

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
function deleteBlog() {
  // let blogId;

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
  // getAllComments,
  updateEmojis,
  deleteBlog,
};
