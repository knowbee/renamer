const cli = require("commander");

const renamer = new cli.Command();
module.exports = {
  helper: () => {
    renamer
      .name("@knowbee/renamer")
      .description(
        `rename multiple files with by filenames,patterns or extensions
      `
      )
      .version("1.0.2")
      .option("--path, -p", "provide a path to run renamer")
      .parse(process.argv);
    renamer.on("--help", () => {
      console.log("How to use renamer:");
      console.log("  $ rename --help");
      console.log("  $ rename --path .");
    });
  }
};
