#! /usr/bin/env node

const fs = require("fs");

const { askCommands } = require("./src/cli");
const { opendirs } = require("./src/opendirs");
const { helper } = require("./src/help");
// check to see if required arguments are given
helper();
if (process.argv.length < 3) {
  console.error(`Usage: rename --path <Path Name>`);
  process.exit(1);
}

process.argv.slice(2).forEach(function(cmd) {
  if (cmd === "--path" || cmd === "-p") {
    try {
      if (fs.existsSync(process.argv[3])) {
        askCommands().then(answers => {
          opendirs(answers, process.argv[3]);
        });
      } else {
        console.log(process.argv);
        console.log("");
        console.log("  $ rename --help");
        process.exit();
      }
    } catch (error) {
      console.log("invalid path");
    }
  }
});
