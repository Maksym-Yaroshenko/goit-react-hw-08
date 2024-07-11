import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      //   state.filters.name.toLowerCase().includes(action.payload.toLowerCase());
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
