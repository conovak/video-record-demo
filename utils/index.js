const fs = require('fs');
const prettify = require('html-prettify');

module.exports = {
  formatURL: (s) => {
    return !/^(?:https|http)/.test(s) ? `https://${s}` : s
  },
  outputHTML: (file, html) => {
    fs.writeFile(file, prettify(html), (err) => {
      if (err) return console.log(err);
      console.log('Success');
    });
  }
}