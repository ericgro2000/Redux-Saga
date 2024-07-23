import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import { rootWatcher } from "../saga/index";

const rootReducer = combineReducers({
  countReducer,
  userReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootWatcher);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
