/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe("head", () => {
    let title;
    test("it has a title", () => {
      title = document.querySelector("title");
      expect(title).toBeTruthy();
      expect(title.textContent.toLowerCase()).toContain("super");
      expect(title.textContent.toLowerCase()).toContain("blog");
    });
  });

  describe("body", () => {
    test("it has a unique h1 element", () => {
      const h1s = document.querySelectorAll("h1");
      expect(h1s.length).toBe(1);
    });

    describe("header", () => {
      let header;
      beforeEach(() => {
        header = document.getElementById("header");
      });

      test("the h1 is in the header", () => {
        const h1 = header.querySelector("h1");
        expect(h1).toBeTruthy();
      });

      describe("navbar", () => {
        test("it exists", () => {
          const nav = document.querySelector("nav-bar");
          expect(nav).toBeTruthy();
        });

        // test('its children contain anchor tags linked to the right places', () => {
        //   const navChildren = document.querySelectorAll('nav a');
        //   expect(navChildren.length).toBe(3);
        //   for (let i=0; i<3; i++) {
        //     let child = navChildren[i];
        //     let text = child.innerText;
        //     switch (i) {
        //       case 0:
        //         expect(text).toBe('./index.html');
        //         break
        //       case 1:
        //         expect()
        //     }
        //   }
        // })
      });
    });

    describe("main", () => {});
  });
});
