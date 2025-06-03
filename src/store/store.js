import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api"; // Importando API global
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer, // Adicionando API global
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Adiciona RTK Query middleware
});

export default store;
