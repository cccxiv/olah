import { CommandModule } from "yargs";
import app from "../app";

const command = "start";

const describe = "Start Olah server";

const handler = () => {
  app.listen({ port: 3000 }, function (err) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
};

export default {
  command,
  describe,
  handler,
} as CommandModule;
