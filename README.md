# Helping Hand

Helping Hand is an app to help you locate local volunteer projects to join.

Helping Hand is the final project of group 7 from Techlabs Hamburg Winter 2022.

### Apps and Packages

We used Turborepo to manage our monorepo build. The projct consists of the following packages:

- `backend`: an [Express](https://expressjs.com/) server
- `frontend`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a React UI library
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

## Using this repo

Run the following command:

Install dependencies

```sh
pnpm install
```

Run dev server

```sh
pnpm dev
```

## Features

- Add a new volunteer opportunity
- Apply to projects as a volunteer

## Authors

- [@Jordan-Patel](https://github.com/Jordan-Patel)
- [@Julia-Reshöft](https://github.com/julire)
- [@Amanpreet-Chalga](https://github.com/amanpreetchalga)
