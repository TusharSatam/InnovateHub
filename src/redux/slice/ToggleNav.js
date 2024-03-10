import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleMoboNav: false,
};
const ToggleNavbarSlice = createSlice({
  name: "ToggleNavbarSlice",
  initialState,
  reducers: {
    toggleMoboNav: (state) => {
        state.toggleMoboNav = !state.toggleMoboNav;
      },
  },
});

export const {toggleMoboNav} = ToggleNavbarSlice.actions;
export default ToggleNavbarSlice.reducer;
