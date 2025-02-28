# Node.jS

- It is a open source runtime environment for executing JS code
- We build API (Application Program Interface) as backend Service
- Used for

  - Highly scalable
  - Data Intensive
  - Real time App

- What is special about Nodejs?
  - Superfast and highly scalable
  - Great for prototyping
  - JS everywhere
  - Cleaner and morre consistent codebase
  - Largest ecosystem of open-source libs

## Multiple of version of node js can be install in machine using nvm/fnm

## Course Content

1. Introduction
2. Architecture
3. How node works?

## Architecture

Browser:
Engine:

- chrome: v8
- Firefox: spidermonkey
- Edge: chakra

jscode --> jsengine -->

### None blocking Asynchronous nature of node

### Even loop

callstack(requests) --> webAPIs (browser webapi -(settimeout,DOM, fetch)) --> callbackQueue(onclick, onload, ondone)-->callstack(requests)

## Modules

- Consider modules to be the same as JavaScript Libraries.
- A set of functions you want to include in your application.

### Built-in modules

- Node js has a set of built-in modules. Few of the built-in modules are:
  - events: to handle events
  - fs: to handle file system

### Include Modules

- to include modules, use require() function
- we can also destructre a modules to get only required functionality

```js
 {} = required("");
```

### npm

NPM is used to install packages from community or third party.

#### Check if NPM exists

npm -v (one time check) in terminal (some time it gives issue in terminal you need use bash)

#### Initialize npm

npm init -y :(-y to avoid initializing process)

#### instal package

npm install (pkgName) || npm i (pkgName) ||npm i --save (pkgName)
npm i --save-dev nodemon
npm i --D nodemon (--D or save-dev install dependencies on developer mode)

- _WE can goto [NPMjs](www.npmjs.com) to check avilable package_

#### uninstall package

npm uninstall (pkgName) || npm i (pkgName)

\_Check .gitigonre if not exist create and add node_modules\_

### Project setup

0. Create new Project folder, go insside that folder
1. npm -v (one time check) in terminal
2. npm init -y
3. package.json file should be generated
4. Goto <www.npmjs.com>, search any library.
5. npm i proper-upper-case
6. if needed, npm uninstall <package-name>
7. Check the package.json file, for dependencies object
8. Create .gitignore file and folder path node_modules\
9. Use package in the project file.
10. If the node_modules folder not found run `npm i`
11. Install developer dependencies as devDependencies using
    a. npm i -D nodemon
    b. npm i --save-dev nodemon
12. Start using npm for any operations such as dev mode or production mode
13. update `script` object with

  ```json
    "dev":"nodemon index.js",
    "start":"node index.js"
  ```

14. npm run dev to start in developer mode / npm run start to run in production mode.

_NPX can be used to check locally added package_