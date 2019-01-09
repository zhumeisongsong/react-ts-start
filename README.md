# react-ts-start

https://facebook.github.io/create-react-app/docs/adding-typescript

https://github.com/Microsoft/TypeScript-React-Starter/blob/master/src/App.tsx


rel="noopener noreferrer"

Dispatch is no longer part of the react-redux library. To fix the issue, replace

import { connect, Dispatch } from 'react-redux';
with

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
 
 2018.01.09 Question
 https://github.com/wmonk/create-react-app-typescript/issues/3
 https://www.typescriptlang.org/docs/handbook/jsx.html