import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";

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
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

persistStore(configure);

export default configure;
