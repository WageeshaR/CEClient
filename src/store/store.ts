import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth";
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = {
    auth: authReducer
}

const persistedReducer = persistCombineReducers(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)