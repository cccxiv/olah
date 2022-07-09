import { CommandModule } from "yargs";
import app from "../app";

const command = "start";

const describe = "Start Olah application";

const handler = () => app();

export default {
  command,
  describe,
  handler,
} as CommandModule;
