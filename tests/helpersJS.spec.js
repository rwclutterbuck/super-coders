/**
 * @jest-environment jsdom
 */

const helpers = require("../src/js/helpers.js");

// describe("GET helpers", () => {});

describe("POST helpers", () => {
  describe("changeSection", () => {
    let section;
    beforeEach(() => {
      helpers.changeSection();
      section = document.querySelector("#form-section");
    });

    test("it produces a h1 tag", () => {
      const h1 = section.querySelector("h1");
      expect(h1).toBeTruthy();
      expect(h1.textContent).toContain("Thanks for your Submission");
    });

    describe("form", () => {
      test("it exists", () => {
        const form = section.querySelector("form");
        expect(form).toBeTruthy();
      });

      test("it contains a different button", () => {
        const form = document.querySelector("form");
        const btn = form.querySelector('[type="submit"]');
        expect(btn).toBeTruthy();
        expect(btn.value).toBe("View Blog");
      });
    });
  });
});
