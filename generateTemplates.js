const { formatURL } = require('./utils');

module.exports = {  
  renderBaseTemplate: (...content) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    </head>
    <body>
      <main class="container">
        ${content.join('\n')}
      </main>
    </body>
    </html>`
  }, 
  renderHeader: (name, location) => {
    return `<header class="jumbotron">
      <h1>${name}</h1>
      <h2>${location}</h2>
    </header>`
    }, 
  renderInfo: (bio, linkedIn, gitHub) => {
    linkedIn = formatURL(linkedIn);
    gitHub = formatURL(gitHub);
  
    return `<h3>Information</h3>
  <section class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">Bio</h5>
      <p class="card-text">${bio}</p>
      <a href="${linkedIn}" class="card-link">LinkedIn URL</a>
      <a href="${gitHub}" class="card-link">GitHub URL</a>
    </div>
  </section>`
  }, 
  renderInterests: (content) => {
    if (!content.length) return '';
    const articles = content.map(text => { 
      return `<article class="list-group-item">${text}</article>`
    });
    return `<h3>Interests</h3>
  <section class="list-group">
    ${articles.join('\n  ')}
  </section>`
  },
};