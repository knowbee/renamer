#! /usr/bin/env node

const fs = require("fs");
const { basename } = require("path");

const { askCommands } = require("./src/cli");
const { opendirs } = require("./src/opendirs");

// check to see if required arguments are given
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
