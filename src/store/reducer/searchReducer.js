import { createSlice } from "@reduxjs/toolkit";

const searchInititalState = {
  searchedProducts: [],
  isLoading: false,
  isSearching: false,
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInititalState,
  reducers: {
    searchData(state, action) {
      state.isLoading = true;
      state.isSearching = true;
    },

    searchDataSuccess(state, action) {
      state.searchedProducts = action.payload;
      state.isLoading = false;
    },

    searchProductsFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    resetSearchProducts(state, action) {
      state.searchedProducts = [];
      state.isLoading = false;
      state.isSearching = false;
      state.error = "";
    },
  },
});

const searchActions = searchSlice.actions;

export default searchSlice.reducer;

export { searchActions };
