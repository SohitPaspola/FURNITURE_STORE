import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  userEmail: null,
  userUid: null,
  loading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    currentUser(state, action) {
      state.userEmail = action.payload;
    },
    unsubscribeUser(state) {
      state.userEmail = null;
      state.userUid = null;
    },
    currentUserUid(state, action) {
      state.userUid = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state, action) {},
  },
});

const authActions = authSlice.actions;

export default authSlice.reducer;

export { authActions };
