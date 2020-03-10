const cli = require("commander");

const rename = new cli.Command();
module.exports = {
  helper: () => {
    rename
      .name("@knowbee/rename")
      .description(
        `rename multiple files with by filenames,patterns or extensions
      `
      )
      .version("0.0.2")
      .option("--path, -p", "provide a path to run rename")
      .parse(process.argv);
    rename.on("--help", () => {
      console.log("How to use rename:");
      console.log("  $ rename --help");
      console.log("  $ rename --path");
    });
  }
};
