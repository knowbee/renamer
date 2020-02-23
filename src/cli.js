const inquirer = require('inquirer');

module.exports = {
  askCommands: () => {
    const questions = [
      {
        name: 'match',
        message: 'file extension to match: ',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Your command is empty';
        }
      },
      {
        name: 'replacer',
        message: 'file extension replacer: ',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Your command is empty';
        }
      },
      {
        name: 'level',
        message: 'level (1 or 2): ',
        validate(value) {
          if (value.length) {
            return true;
          }
          return 'Your command is empty';
        }
      }
    ];
    return inquirer.prompt(questions);
  }
};