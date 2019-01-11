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

Configuring directory watching using environment variable TSC_WATCHDIRECTORY
The watching of directory on platforms that dont support recursive directory watching natively in node, is supported through recursively creating directory watcher for the child directories using different options selected by TSC_WATCHDIRECTORY. Note that on platforms that support native recursive directory watching (e.g windows) the value of this environment variable is ignored.

### tsconfig

     "include": [
        "src"
      ]
      
### References
https://facebook.github.io/create-react-app/docs/adding-typescript
https://medium.com/@pongsatt/how-to-use-redux-in-typescript-ad0b5fe77933
https://medium.com/front-end-weekly/build-a-realtime-pwa-with-react-99e7b0fd3270
https://developer.github.com/v3/#rate-limiting

bad demo: 
https://github.com/Microsoft/TypeScript-React-Starter/blob/master/src/App.tsx

10. Define redux action creator in “src/store/demo/actions.ts”


