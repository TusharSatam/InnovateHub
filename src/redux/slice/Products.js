import { createSlice } from "@reduxjs/toolkit";
import { DashboardData } from "../../utils";

const initialState = {
  products: DashboardData,
  filteredProducts: DashboardData, // Initialize filtered products with all products
  filters: {
    searchText: "",
  },
};
const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter(
        (product) =>
          product.brandName.toLowerCase().includes(searchText) ||
          product.description.toLowerCase().includes(searchText) ||
          product.categories.some((category) =>
            category.name.toLowerCase().includes(searchText)
          ) ||
          product.tags.some((tag) => tag.toLowerCase().includes(searchText))
      );
    },
    deleteProducts: (state, action) => {
      state.filteredProducts = state.filteredProducts.filter((product) => {
        // Use !action.payload.includes(product.brandName) to filter out products
        return !action.payload.includes(product.brandName);
      });
    },
  },
});

export const { filterProducts, deleteProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
