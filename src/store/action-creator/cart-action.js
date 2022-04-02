import { auth, db } from "../../Authentication/firebase";
import { cartActions } from "../reducer/cart-reducer";

export const sendCartData = ({ cart }) => {
  const currentUserUid = auth.currentUser.uid;

  return async (dispatch) => {
    try {
      await db
        .collection("cart" + currentUserUid)
        .doc("userCart")
        .set(
          {
            cart: cart,
          },
          { merge: true }
        );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const currentUserUid = auth.currentUser.uid;

    console.log(currentUserUid);
    if (auth.currentUser) {
      await db
        .collection("cart" + currentUserUid)
        .doc("userCart")
        .onSnapshot((doc) => {
          if (!doc.exists) {
            return;
          }
          console.log(doc.data());
          const userCartData = { ...doc.data() };
          const savedCartData = {
            allItemTotalPrice: userCartData.cart.allItemTotalPrice,
            cartItems: userCartData.cart.cartItems,
            totalNoOfItems: userCartData.cart.totalNoOfItems,
            totalPrice: userCartData.cart.totalPrice,
            counter: userCartData.cart.counter,
          };
          dispatch(cartActions.replaceCart(savedCartData));
        });
    } else {
      return;
    }
  };
};
