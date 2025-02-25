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
