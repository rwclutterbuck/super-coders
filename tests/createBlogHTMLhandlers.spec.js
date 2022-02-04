/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../createBlog.html"),
  "utf8"
);

global.fetch = require("jest-fetch-mock");
jest.mock("../src/js/handlers.js");
jest.mock("../src/js/helpers.js");

describe("handlers.js in createBlog.html", () => {
  let api;
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    api = require("../src/js/handlers.js");
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  describe("postBlog", () => {
    test("it sends POST to /blog with data", () => {
      const fakeEvent = {
        preventDefault: jest.fn(),
        target: {
          title: { value: "Example Blog" },
          blog: { value: "Example Blog" },
          // gif: { value: "http://example.com" },
        },
      };
      console.log(fetch.mock.calls);
      api.postBlog(fakeEvent);
      expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
      expect(fetch.mock.calls[0][1]).toHaveProperty(
        "body",
        JSON.stringify({
          blogtitle: { value: "Example Blog" },
          blogcontent: { value: "Example Blog" },
          // gif: { value: "http://example.com" },
        })
      );
    });
  });
});
