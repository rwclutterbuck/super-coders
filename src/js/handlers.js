const helpers = require("./helpers");

// Fetch all blogs for the homepage
function getAllBlogs() {
  fetch("https://supercodersapi.herokuapp.com/blog")
    .then((r) => r.json())
    .then(helpers.appendBlogs)
    .catch(console.warn);
}

// Post to the server upon creation of new blog
function postBlog(e) {
  e.preventDefault();
  window.sessionStorage.setItem("gif", "");
  getGif(e.target.gif.value);
  break;
  do {
    setTimeout(() => {}, 100);
  } while (!window.sessionStorage.getItem("gif"));
  console.log(e.target);

  const data = {
    blogtitle: e.target.title.value,
    blogcontent: e.target.blog.value,
    gif: window.sessionStorage.getItem("gif"),
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
  let blogId = 1;
  fetch(`https://supercodersapi.herokuapp.com/blog/${blogId}`)
    .then((r) => r.json())
    .then(helpers.appendBlogContent)
    .catch(console.warn);
}

function getGif(gifID) {
  const saveGif = (gif) => {
    console.log(gif)
  }
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=rZze5Ana60111aVYD7ZlwgzZnD5Zzu0b&limit=1&q=${gifID}`
  )
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data["0"].images.original.webp);
    })
    // .then(console.log)
    // (gif) => {
      // console.log(gif)
      // window.sessionStorage.setItem("gif", gif);
    // });
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
  getGif,
  // getAllComments,
  updateEmojis,
  deleteBlog,
};
