declare module "package.json" {
  export const version: string;
}

declare namespace olah {
  interface CliStartArgv {
    dev: boolean;
  }
}

