import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);

const configure = configureStore({
  reducer: persistedReducer,
});

persistStore(configure);

export default configure;
