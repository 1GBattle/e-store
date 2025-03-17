import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryErrorHandling } from "@/app/redux/baseError.api";

export const api = createApi({
  baseQuery: baseQueryErrorHandling,
  reducerPath: "api",
  endpoints: () => ({}),
  tagTypes: ["Products", "Product"],
});
