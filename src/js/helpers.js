const cardTemplate = require("./templates/cardTemplate");
const blogTemplate = require("./templates/blogTemplate");
const commentTemplate = require("./templates/commentTemplate");

function changeSection() {
  const section = document.querySelector("#form-section");
  section.innerHTML = `
    <h1 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Thanks for your Submission!</h1>

    <form action='./blog.html' class="mt-6 ">

      <div class="flex justify-center mt-6">
        <input type="submit" class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" value="View Blog"/>
      </div>

    </form>`;
}

// Add all blogs to index.html/blog.html on page load
function appendBlogs(blogs) {
  const cardContainer = document.querySelector("#card-container");
  // console.log(blogs);
  for (key in blogs) {
    cardContainer.innerHTML += cardTemplate(key);
    const gif = document.getElementById(`card-gif-${key}`);
    gif.src = blogs[key].gif;

    const title = document.getElementById(`card-title-${key}`);
    title.textContent = blogs[key].blogtitle;

    const content = document.getElementById(`card-content-${key}`);
    content.textContent = blogs[key].blogcontent;

    const date = document.getElementById(`card-date-${key}`);
    const cardDate = blogs[key].timestamp.split(" ")[0];
    date.textContent = cardDate;

    const comment = document.getElementById(`comments-${key}`);
    comment.textContent = Object.keys(blogs[key].comment).length;

    for (let i of [1, 2, 3]) {
      const emoji = document.getElementById(`card-emoji-${key}-${i}`);
      emoji.textContent = blogs[key].emoji[i].emojiCount;
    }
  }
}

function appendComment(comment, key, container) {
  container.innerHTML += commentTemplate(key);

  const commentTimestamp = document.getElementById(`comment-timestamp-${key}`);
  commentDate = comment.timestamp.split(" ")[0];
  commentTimestamp.textContent = commentDate;

  const blogComment = document.getElementById(`comment-content-${key}`);
  blogComment.textContent = comment.blogcomment;
}

// Deal with comment separately - append to bottom of specific blog post in blog.html
function appendComments(comments) {
  const commentContainer = document.getElementById("comment-container");
  for (key in comments) {
    appendComment(comments[key], key, commentContainer);
  }
}

// Render specific blog post in blog.html
function appendBlogContent(blog) {
  // console.log(blog);
  const blogContainer = document.querySelector("#blog-container");
  blogContainer.innerHTML = blogTemplate(blog);

  const gif = document.getElementById("gif");
  gif.src = blog.gif;

  const blogDate = document.getElementById("blog-date");
  blogDate.textContent = blog.timestamp.split(" ")[0];

  const blogTitle = document.getElementById("blog-title");
  blogTitle.textContent = blog.blogtitle;

  const blogContent = document.getElementById("blog-content");
  blogContent.textContent = blog.blogcontent;

  appendComments(blog.comment);
}

module.exports = {
  changeSection,
  appendBlogs,
  appendComment,
  appendComments,
  appendBlogContent,
};
