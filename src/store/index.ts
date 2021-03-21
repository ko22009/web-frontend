import { combineReducers, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const context = require.context("./", false, /\.ts$/);
const keys = context.keys().filter((key) => !key.includes("index"));

export const reducers: { [p: string]: any } = keys.reduce(
  (c, v) => ({
    ...c,
    [v.toLocaleLowerCase().replace(/^\.\/([\w-_0-9]+)\.ts$/, "$1")]: context(v)
      .default,
  }),
  {}
);

export default createStore(combineReducers(reducers), composeWithDevTools());
