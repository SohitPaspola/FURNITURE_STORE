import { createSlice } from "@reduxjs/toolkit";

const addressInitialState = {
  addresses: [],
  editIdData: null,
  editId: null,
  isEditing: false,
  showModal: false,
  changed: false,
};

const addressSlice = createSlice({
  name: "address",
  initialState: addressInitialState,
  reducers: {
    replaceAddress(state, action) {
      const { addresses } = action.payload;
      state.addresses = addresses;
    },

    toggleModal(state, action) {
      state.showModal = action.payload;
    },

    addNewAddress(state, action) {
      state.addresses.push(action.payload);
      state.changed = true;
    },

    toggleEditing(state, action) {
      state.isEditing = action.payload;
    },

    editAddress(state, action) {
      const id = action.payload;
      state.editId = action.payload;
      const existingItem = state.addresses.find((item) => item.id === id);
      state.editIdData = existingItem;
      state.changed = true;
    },

    removeAddress(state, action) {
      const id = action.payload;
      state.addresses = state.addresses.filter((item) => item.id !== id);
      state.changed = true;
    },

    updatedAddress(state, action) {
      const id = state.editId;
      const index = state.addresses.findIndex((item) => item.id === id);
      state.addresses[index] = { ...action.payload };
      state.changed = true;
    },

    defaultState(state, action) {
      state.isEditing = false;
      state.editIdData = null;
      state.editId = null;
      state.showModal = false;
    },
  },
});

const addressActions = addressSlice.actions;

export { addressActions };
export default addressSlice.reducer;
