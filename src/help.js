const cli = require('commander');

const rename = new cli.Command();
module.exports = {
  helper: () => {
    rename
      .name('@knawbee/rename')
      .description(
        `it renames files with regex 
      `
      )
      .version('1.0.0')
      .option('--path, -p', 'provide a path to run rename')
      .parse(process.argv);
    rename.on('--help', () => {
      console.log('How to use rename:');
      console.log('  $ rename --help');
      console.log('  $ rename --path');
    });
  }
};