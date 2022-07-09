import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import start from "./cli/start";

yargs(hideBin(process.argv)).command(start).help().argv;
