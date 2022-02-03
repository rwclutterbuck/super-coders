/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../blog.html"), "utf8");

global.fetch = require("jest-fetch-mock");

describe("handlers.js in blog.html", () => {
  let api;
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    api = require("../src/js/handlers.js");
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  describe("getBlog", () => {
    test("send GET request to /blog/:id", () => {
      let blogId = 1;
      api.getBlog(blogId);
      expect(fetch.mock.calls[0][0]).toMatch(/blog\/1$/);
    });
  });
});
