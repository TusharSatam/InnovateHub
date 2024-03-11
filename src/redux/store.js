import { configureStore } from "@reduxjs/toolkit";
import ToggleNavbarSlice from "./slice/ToggleNav.js";
import ProductsSlice from "./slice/Products.js";

export const store = configureStore({
  reducer: {
    ToggleNavbarSlice: ToggleNavbarSlice,
    ProductsSlice: ProductsSlice,
  },
});
