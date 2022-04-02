import { db } from "../../Authentication/firebase";
import { productActions } from "../reducer/ProductReducer";

export const fetchProducts = () => {
  return async (dispatch) => {
    const getFromFirebase = db.collection("furnitures");
    getFromFirebase.onSnapshot((querySnapShot) => {
      const productItems = querySnapShot.docs.map((doc) => doc.data());
      dispatch(productActions.fetchingSuccess(productItems));
    });
  };
};
