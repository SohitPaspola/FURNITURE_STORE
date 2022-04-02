import { createSlice } from "@reduxjs/toolkit";

const productInitialState = {
  products: [],
  loading: false,
  error: null,
  productInfo: "",
  productId: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: {
    startFetching(state, action) {
      state.loading = true;
      state.error = null;
    },

    fetchingSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },

    fetchingFailed(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },

    getProductInfo(state, action) {
      const id = action.payload;
      state.productId = action.payload;
      const item = state.products.find((e) => e.id === id);
      state.productInfo = item;
    },
  },
});

const productActions = productSlice.actions;

export default productSlice.reducer;

export { productActions };
