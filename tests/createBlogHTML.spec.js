/**
* @jest-environment jsdom
*/

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../client/src/html/createBlog.html'), 'utf8')

describe('index.html', () => {

  beforeEach(() => {
      document.documentElement.innerHTML = html.toString();
  })

  describe('head', () => {
    test('it has a title', () => {
      const title = document.querySelector('title');
      expect(title).toBeTruthy();
      // expect(title.innerText).toContain('Super');
      // expect(title.innerText).toContain('Blog');
    })
  })

  describe('body', () => {

    test('it has a unique h1 element', () => {
      const h1s = document.querySelectorAll('h1');
      expect(h1s.length).toBe(1);
    })

    describe('header', () => {
      
      describe('navbar', () => {
          
        test('it exists', () => {
          const nav = document.querySelector('nav');
          expect(nav).toBeTruthy();
        })

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

      })

    })

    describe('main', () => {

      describe('form', () => {

        let form, titleInput, blogInput, submit;
        beforeEach(() => {
          form = document.querySelector('form')
        })

        test('it exists', () => {
          expect(form).toBeTruthy();
        })

        describe('title input', () => {

          beforeEach(() => {
            titleInput = form.querySelector('#title');
          })

          test('it exists', () => {
            expect(titleInput).toBeTruthy();
          })

          test('it has text input', () => {
            expect(titleInput.getAttribute('type')).toBe('text');
          })

          test('it has a label', () => {
            let label = form.querySelector('[for="title"]')
            expect(label).toBeTruthy();
          })

        })

        describe('main blog input', () => {

          beforeEach(() => {
            blogInput = form.querySelector('#blog');
          })

          test('it exists', () => {
            expect(blogInput).toBeTruthy();
          })

          test('it is a text area', () => {
            expect(blogInput.nodeName.toLowerCase()).toBe('textarea');
          })

          test('it has a character limit of 500', () => {
            expect(blogInput.getAttribute('maxlength')).toBe('500');
          })

          test('it has a label', () => {
            let label = form.querySelector('[for="blog"]')
            expect(label).toBeTruthy();
          })

        })

        describe('submit button', () => {

          beforeEach(() => {
            submit = form.querySelector('[type="submit"]');
          })

          test('it exists', () => {
            expect(submit).toBeTruthy();
          })

          test('it tells the user to submit', () => {
            expect(submit.getAttribute('value').toLowerCase()).toContain('submit');
          })

        })

      })

    })

  })

})
