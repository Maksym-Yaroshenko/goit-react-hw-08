import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/slice";
import filtersSlice from "./filters/slice";
import authSlice from "./auth/slice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filters: filtersSlice,
  auth: persistedAuthReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
