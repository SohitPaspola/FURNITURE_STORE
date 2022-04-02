import { createSlice } from "@reduxjs/toolkit";

const alertInitialState = {
  alertData: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState: alertInitialState,
  reducers: {
    showAlert(state, action) {
      const { status, title, message } = action.payload;
      state.alertData = { status, title, message };
    },
    removeAlert(state, action) {
      state.alertData = null;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice.reducer;
