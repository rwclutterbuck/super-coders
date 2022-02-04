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
      console.log(fetch.mock)
      expect(fetch.mock.calls[0][0]).toMatch(/blog\/1$/);
    });
  });



  describe("newComment", () => {
    test(`it makes a fetch call to the given blogs api url`, () => {
      let blogId = 2
        api.getBlog(blogId)
        expect(fetch).toHaveBeenCalledWith(`https://supercodersapi.herokuapp.com/blog/2`)
    })

// Target should be the id of where you input the values 

    test("it sends POST to /blog/:id with data", () => {
      const fakeEvent = {
        preventDefault: jest.fn(),
        target: {
          comment: { value: "Example comment" },
        },
      };
      console.log(fetch.mock);
      api.newComment(fakeEvent);
      expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
      expect(fetch.mock.calls[0][1]).toHaveProperty(
        "body",
        JSON.stringify({
          blogcomment: { value: "Example comment" },     
        })
      );
      })


      test('it makes a fetch call to the given users blog', () => {
        const fakeEvent = {
          preventDefault: jest.fn(),
          target: { comment: {value: "string"},
          },
        };
        api.newComment(fakeEvent)
        expect(fetch.mock.calls[0][0]).toBe('https://supercodersapi.herokuapp.com/blog/1')
    })

  
    

    test(`it makes a fetch call to the given search's url`, () => {
      const stubEvent = {
        preventDefault: jest.fn(),
        target: { value: "ostrich" }};
      api.searchBlog(stubEvent)
        expect(fetch.mock.calls[0][0]).toBe(`https://supercodersapi.herokuapp.com/search?q=ostrich`)
    })

    test(`it makes a fetch call for a given search`, () => {
      const stubEvent = {
        preventDefault: jest.fn(),
        target: { e :{ value: "ostrich" }}};
      api.searchBlog(stubEvent)
        expect(fetch).toHaveBeenCalled()
    })
    
  });


 
});

