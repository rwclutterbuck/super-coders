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
          blogtitle: { value: "Example Blog" },
          blogcontent: { value: "Example Blog" },
        },
      };
      api.postBlog(fakeEvent);
      expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
      expect(fetch.mock.calls[0][1]).toHaveProperty(
        "body",
        JSON.stringify({
          blogtitle: { value: "Example Blog" },
          blogcontent: { value: "Example Blog" },
        })
      );
    });
  });
});
