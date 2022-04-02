import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
  totalNoOfItems: 0,
  counter: 1,
  totalPrice: 0,
  allItemTotalPrice: 0,
  changed: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      const {
        cartItems,
        totalNoOfItems,
        counter,
        totalPrice,
        allItemTotalPrice,
      } = action.payload;
      state.cartItems = cartItems;
      state.allItemTotalPrice = allItemTotalPrice;
      state.totalPrice = totalPrice;
      state.totalNoOfItems = totalNoOfItems;
      state.counter = counter;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalNoOfItems += state.counter;
      state.totalPrice = newItem.price * newItem.counter;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.counter += newItem.counter;
        existingItem.totalPrice = existingItem.price * existingItem.counter;
        state.allItemTotalPrice += existingItem.totalPrice;
      } else {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          icons: newItem.icons[0],
          counter: state.counter,
          totalPrice: state.totalPrice,
        });
        state.allItemTotalPrice += state.totalPrice;
      }
      state.totalPrice = 0;
      state.changed = true;
    },

    decreaseItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.counter === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalNoOfItems--;
      } else {
        existingItem.counter--;
        state.totalNoOfItems--;
      }
      existingItem.totalPrice -= existingItem.price;
      state.allItemTotalPrice -= existingItem.price;
      state.changed = true;
    },

    increaseItemInCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      existingItem.counter++;
      state.totalNoOfItems++;
      existingItem.totalPrice += existingItem.price;
      state.allItemTotalPrice += existingItem.price;
      state.changed = true;
    },

    removeParticularItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalNoOfItems -= existingItem.counter;
      state.allItemTotalPrice -= existingItem.totalPrice;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.changed = true;
    },

    updateCounter(state, action) {
      const counter = action.payload;
      state.counter = counter;
    },
  },
});

const cartActions = CartSlice.actions;
export default CartSlice.reducer;
export { cartActions };
