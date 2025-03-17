import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/app/redux/api";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { errorApi } from "@/app/redux/error.api";

export const createStore = () => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      [errorApi.reducerPath]: errorApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware).concat(errorApi.middleware),
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
