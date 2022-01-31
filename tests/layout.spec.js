/**
* @jest-environment jsdom
*/

const fs = require('fs')
const path = require('path')
const html = fs.readFileSync(path.resolve(__dirname, '../client/src/html/index.html'), 'utf8')

describe('index.html', () => {

  beforeEach(() => {
      document.documentElement.innerHTML = html.toString();
  })

  describe('head', () => {
    test('it has a title', () => {
      const title = document.querySelector('title');
      expect(title).toBeTruthy();
      expect(title.innerText).toContain('Super');
      expect(title.innerText).toContain('Blog');
    })
  })

  describe('body', () => {

    test('it has a unique h1 element', () => {
      const h1s = document.querySelectorAll('h1');
      expect(h1s.length).toBe(1);
    })

    describe('header', () => {

      test('the h1 is in the header', () => {
        const header = document.querySelector('header');
        expect(header.firstChild.nodeName.toLowerCase()).toBe('h1');
      })
      
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

      

    })

  })

})
