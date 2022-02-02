function blog() {
  return `
    <div
      class="max-w-2xl w-screen mx-auto overflow-hidden bg-white shadow-md dark:bg-gray-800"
    >
      <img
        id="gif"
        class="object-cover w-full h-full"
        src="https://media0.giphy.com/media/3orieKKmYyvUdR3RkY/giphy.webp?cid=112e516bv9aio11kbntfjo563ma9o18v0kdt9yigc281ksl8&rid=giphy.webp&ct=g"
        alt="Article"
      />

      <div class="p-6">
        <div>
          <h1
            id="blog-title"
            class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white"
            ></h1
          >
          <span 
            id="blog-date"
            class="mx-1 text-xs text-gray-600 dark:text-gray-300"
          ></span
        >
          <p 
            id="blog-content"
            class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          </p>
        </div>
      </div>
    </div>
    <div id="comments"
      class="px-4 dark:bg-gray-700 dark:text-gray-100"
    >
      <h3 class="pt-2 font-semibold text-xl">Comments</h3>
        <div id="comment-container"></div>
        <form action="" id="make-comment">
          <input
            class="py-2 w-full px-4 mb-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-400 dark:focus:border-gray-300 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
            type="text"
            name=""
            id=""
            placeholder="write your own comment"
            maxlength="60"
          />
        </form>
      </div>
    </div>
  `;
}

module.exports = blog;
