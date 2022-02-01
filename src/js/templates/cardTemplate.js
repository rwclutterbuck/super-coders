function blogCard(id, obj) {
  return `
    <div
      id="card-${parseInt(id)}"
      class="card m-5 max-w-2xl overflow-hidden bg-white shadow-md dark:bg-gray-700 sm:flex sm:h-auto"
    >
      <img
        class="object-cover w-full h-64 sm:w-1/2"
        src="/src/images/splash-screen.jpg"
        alt="Article"
      />

      <div class="p-6 w-full">
        <div>
          <a
            href="blog.html"
            class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
            >${obj.blogtitle}</a
          >
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            ${obj.blogcontent}
          </p>
        </div>

        <div class="mt-4">
          <div class="flex items-center">
            <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"
              >21 SEP 2015</span
            >
          </div>
        </div>
      </div>
    </div>
  `;
}

module.exports = blogCard;
