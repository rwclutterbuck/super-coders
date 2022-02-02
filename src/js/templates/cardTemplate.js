function blogCard(id) {
  return `
  <a
    id="card-link-${id}"
    href="./blog.html"
    class="blog-card hover:text-gray-600"
    >
    <div
      id="card-${id}"
      class="card my-1 w-screen max-w-xl overflow-hidden bg-white shadow-md dark:bg-gray-700 dark:shadow-gray-700 sm:flex sm:h-auto sm:m-5 sm:hover:scale-105 hover:shadow-2xl hover:dark:shadow-gray-700 transition duration-150 ease-in-out"
    >
      <img
        class="object-cover w-full h-64 sm:w-1/2"
        src="/src/images/splash-screen.jpg"
        alt="Article"
      />

      <div class="p-6 w-full">
        <div>
          <h3 
            id="card-title-${id}"
            class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white ">
          </h3>
          <span 
            id="card-date-${id}"
            class="mx-1 text-xs text-gray-600 dark:text-gray-300"
            ></span
          >
          <p 
            id="card-content-${id}"
            class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            
          </p>
        </div>


      </div>
    </div>
    </a>
  `;
}

module.exports = blogCard;
