# Node TypeScript Starter

## Getting started

1. Template repo: https://github.com/HorusGoul/node-ts-starter

```bash
$ git clone https://github.com/HorusGoul/node-ts-starter your-next-project
$ cd your-next-project
```

## Scripts

- `yarn dev`. Runs the project in dev mode, which means that it won't check types and will restart with every change you make.
- `yarn build`. Compiles the project to the `./dist` folder.
- `yarn typecheck`. Checks the typings of the project. Gets executed before trying to create a new commit but you can also run it manually.
- `yarn start`. Runs the compiled program. Remember to execute `yarn build` before attempting to launch the program.
- `yarn lint`. Runs ESLint. You can append `--fix` in order to fix autofixable issues.
