import createSagaMiddleware from "@redux-saga/core";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(createSagaMiddleware())
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
