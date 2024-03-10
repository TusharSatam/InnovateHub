import { configureStore } from "@reduxjs/toolkit";
import ToggleNavbarSlice from "./slice/ToggleNav.js";
export const store = configureStore({
  reducer: {
    ToggleNavbarSlice: ToggleNavbarSlice,
  },
});
