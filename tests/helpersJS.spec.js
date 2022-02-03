/**
 * @jest-environment jsdom
 */

//const { append } = require("express/lib/response");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let api;
let helpers;
describe("handlers.js in index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    api = require("../src/js/handlers.js");
    helpers = require("../src/js/helpers.js");
  });

  describe("GET helpers", () => {
    describe("appendBlogs", () => {
      test("renders a new card on the page with blog data", () => {
        let cardContainer = document.querySelector("#card-container");
        const blogCount = cardContainer.querySelectorAll(".blog-card").length;
        let testID = "test";
        let testBlog = {
          testID: {
            blogtitle: "Test",
            blogcontent: "Testing...",
            timestamp: "29/01/2022 11:45:33",
            gif: "https://test.com",
            comment: {
              1: {
                blogcomment: "Hiiii",
                timestamp: "29/01/2022 11:48:37",
              },
              2: {
                blogcomment: "Yoooooo",
                timestamp: "29/01/2022 12:22:07",
              },
            },
            emoji: {
              1: { emojiCount: 231 },
              2: { emojiCount: 175 },
              3: { emojiCount: 98 },
            },
          },
        };
        helpers.appendBlogs(testBlog);
        const newBlogCount =
          cardContainer.querySelectorAll(".blog-card").length;
        expect(newBlogCount).toEqual(blogCount + 1);
        cardContainer = document.querySelector("#card-container");
        // console.log(cardContainer.lastChild);
        // expect(cardContainer.lastChild.id).toBe(`card-link-${testID}`);
      });
    });

    describe("appendComments", () => {
      test("it returns a template containing all comments", () => {});
    });

    describe("appendBlogContent", () => {
      test("it renders a blog template in blog.html", () => {
        const blogContainer = document.querySelector("#blog-container");
      });
    });
  });

  // describe("POST helpers", () => {
  //   describe("changeSection", () => {
  //     let helpers;
  //     beforeEach(() => {
  //       helpers = require("../src/js/helpers.js");
  //     });

  //     test("it produces a h1 tag", () => {
  //       helpers.changeSection();
  //       const section = document.querySelector("#form-section");
  //       const h1 = section.querySelector("h1");
  //       expect(h1).toBeTruthy();
  //       expect(h1.textContent).toContain("Thanks for your Submission");
  //     });

  //     describe("form", () => {
  //       test("it exists", () => {
  //         helpers.changeSection();
  //         const section = document.querySelector("#form-section");
  //         const form = section.querySelector("form");
  //         expect(form).toBeTruthy();
  //       });

  //       test("it contains a different button", () => {
  //         helpers.changeSection();
  //         const form = document.querySelector("form");
  //         expect(form.action).toBe("./blog.html");
  //         const btn = form.querySelector('[type="submit"]');
  //         expect(btn).toBeTruthy();
  //         expect(btn.value).toBe("View Blog");
  //       });
  //     });
  //   });
  // });
});
