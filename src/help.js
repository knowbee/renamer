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
      .version("1.0.1")
      .option("--path, -p", "provide a path to run renamer")
      .parse(process.argv);
    rename.on("--help", () => {
      console.log("How to use renamer:");
      console.log("  $ rename --help");
      console.log("  $ rename --path");
    });
  }
};
