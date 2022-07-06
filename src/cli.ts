import { program } from "commander";
import { version } from "../package.json";

program
    .option('-v, --version', 'print Olah version')
    .parse()

const options = program.opts();

if (options.version) {
    console.log(version);
}