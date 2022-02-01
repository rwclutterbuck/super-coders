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

function updateBtn(data) {}

function appendBlog(blog) {}

function appendBlogs(blogs) {}

function appendComment(comment) {}

function appendComments(comments) {}

function appendBlogContent(blog) {}

module.exports = {
  changeSection,
  updateBtn,
  appendBlog,
  appendBlogs,
  appendComment,
  appendComments,
  appendBlogContent,
};
