function adminTemplate() {
  return `<section
    class="w-2/5 max-w-2xl px-6 py-4 mx-auto m-8 bg-indigo-400 rounded-md shadow-md dark:bg-gray-800"
  >
  <h1
    class="text-3xl font-semibold text-center text-gray-800 dark:text-white"
  >
    Register New Admin
  </h1>

  <div
    class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3"
  ></div>

  <form action="#" id="admin-login" class="mt-6">
    <div class="w-full mt-4">
      <div class="items-center -mx-2 md:flex">
        <div class="w-full mx-2">
          <label
            for="new-admin-username"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >Username</label
          >

          <input
            id="new-admin-username"
            class="block w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="text"
            placeholder="Enter username here"
            required
          />
        </div>
      </div>

      <div class="items-center -mx-2 md:flex">
        <div class="w-full mx-2">
          <label
            for="new-admin-password"
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >Password</label
          >

          <input
            id="new-admin-password"
            class="block w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            type="password"
            placeholder="Enter password here"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-6">
      <input
        type="submit"
        class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        value="Register"
      />
    </div>
  </form>
  </section>
  `;
}

module.exports = { adminTemplate };
