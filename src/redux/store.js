import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filters: filtersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware({
  //     serializableCheck: false,
  //   });
  // },
});

// export const persistor = persistStore(store);
