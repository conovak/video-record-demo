const questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    validate: (input) => !!input,
  },
  {
    type: 'input',
    message: 'Where are you from?',
    name: 'location',
    validate: (input) => !!input,
  },
  {
    type: 'input',
    message: 'Tell me a bit about yourself?',
    name: 'bio',
    validate: (input) => !!input,
  },
  {
    type: 'input',
    message: 'What is your LinkedIn URL?',
    name: 'linkedIn',
    validate: (input) => !!input,
    default: 'https://linkedin.com',
  },
  {
    type: 'input',
    message: 'What is your GitHub URL?',
    name: 'gitHub',
    validate: (input) => !!input,
    default: 'https://github.com',
  },
  {
    type: 'checkbox',
    message: 'What are some of your interests?',
    name: 'interests',
    choices: [
      'Coding', 
      'Planning', 
      'Design', 
      'Leadership', 
      'Fun',
    ],
  }
];

module.exports = questions;