const inquirer = require('inquirer');
const gen = require('./generateTemplates');
const questions = require('./questions');
const { outputHTML } = require('./utils');

inquirer.prompt(questions).then(({
  name,
  location,
  bio,
  linkedIn,
  gitHub,
  interests
}) => {
  const headerEl = gen.renderHeader(name, location);
  const infoEl = gen.renderInfo(bio, linkedIn, gitHub);
  const interestEl = gen.renderInterests(interests);

  const baseTemplate = gen.renderBaseTemplate(
    headerEl,
    infoEl,
    interestEl,
  );

  outputHTML('home.html', baseTemplate);
});
