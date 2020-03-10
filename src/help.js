const cli = require("commander");

const rename = new cli.Command();
module.exports = {
  helper: () => {
    rename
      .name("@knawbee/rename")
      .description(
        `rename multiple files with by filenames,patterns or extensions
      `
      )
      .version("1.0.0")
      .option("--path, -p", "provide a path to run rename")
      .parse(process.argv);
    rename.on("--help", () => {
      console.log("How to use rename:");
      console.log("  $ rename --help");
      console.log("  $ rename --path");
    });
  }
};
