const { blogEmoji } = require("./emojiTemplate");
const emojiLinks = [
  "https://media3.giphy.com/media/YNDLZBTq8hGPDJkmYo/giphy.gif?cid=790b7611uzvk78j6bz8k7e747zafmwnem6howjhrau4oskyc&rid=giphy.gif&ct=g",
  "https://media4.giphy.com/media/S3nZ8V9uemShxiWX8g/giphy.gif?cid=790b761199k9mbqd8jig3lqabvjw6gcjraorrdxzbaydd5sq&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/hp3dmEypS0FaoyzWLR/giphy.gif?cid=790b7611f64b1e50ed6ab0f626bab05a6b50b2dc5be38775&rid=giphy.gif&ct=g",
];
function preview() {
  return `
    <div
      class="main-blog max-w-2xl w-screen mx-auto overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-t"
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
          ></h1>
          <span
            id="blog-date"
            class="mx-1 text-xs text-gray-600 dark:text-gray-300"
          ></span>
          <p
            id="blog-content"
            class="mt-2 text text-justify text-gray-600 dark:text-gray-400"
          ></p>
        </div>
      </div>
    </div>
  `;
}

module.exports = preview;
