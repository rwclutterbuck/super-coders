const { changeSection } = require('./helpers');

function postBlog(e) {
  e.preventDefault();

  const data = {
      title: e.target.title.value,
      blog: e.target.blog.value
  }

  // const options = {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //         "Content-Type": "application/json"
  //     }
  // }

  changeSection();

  // fetch('#', options)
  //   .then(r => r.json())
  //   .then(changeButton)
  //   .catch(console.warn)

}

module.exports = { postBlog };
