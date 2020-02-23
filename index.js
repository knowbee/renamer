#!/usr/bin/env node

const fs = require("fs")
const {
  askCommands,
} = require('./src/cli');
const {opendirs} = require("./src/opendirs")
const {helper} = require("./src/help")
helper()

process.argv.slice(2).forEach(function(cmd) {
  if (cmd === "--path" || cmd === "-p") {
    try {
      if (fs.existsSync(process.argv[3])) {
        askCommands().then((answers) => {
          opendirs(answers, process.argv[3]);
        });
      
      }else{
        console.log("");
        console.log("  $ rename --help");
        process.exit();
      }
    } catch (error) {
      console.log("invalid path")
    }
   
  }
})

