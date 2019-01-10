# react-ts-start

### A tag _blank need to add

    rel="noopener noreferrer"

### Dispatch

Dispatch is no longer part of the react-redux library. To fix the issue, replace

    import { connect, Dispatch } from 'react-redux';
    
with

    import { connect } from 'react-redux';
    import { Dispatch } from 'redux';
 
### 2018.01.09 Question

https://github.com/wmonk/create-react-app-typescript/issues/3
 
https://www.typescriptlang.org/docs/handbook/jsx.html
 
### Compiler Options

https://www.typescriptlang.org/docs/handbook/compiler-options.html

### References
https://facebook.github.io/create-react-app/docs/adding-typescript

https://github.com/Microsoft/TypeScript-React-Starter/blob/master/src/App.tsx

