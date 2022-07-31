import { CommandModule, ArgumentsCamelCase, CommandBuilder, Argv } from "yargs";
import { olah } from "../typing";
import app from "../app";

const command = "start";

const describe = "Start Olah application";

const builder = (yargs: Argv) => {
  yargs.option("dev", {
    describe: "Enable development mode",
  });
};

const handler = (argv: ArgumentsCamelCase<olah.CliStartArgv>) => {
  app(argv.dev);
};

export default {
  command,
  describe,
  handler,
  builder,
} as CommandModule;
