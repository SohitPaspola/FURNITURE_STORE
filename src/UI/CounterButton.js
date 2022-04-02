import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { cartActions } from "../store/reducer/cart-reducer";
import classes from "./CounterButton.module.css";

const CounterButton = ({ cartItemId }) => {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const particularProductData = cartItems.find(
    (item) => item.id === cartItemId
  );

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const increaseCounterHandler = () => {
    if (location.pathname === "/cart") {
      dispatch(cartActions.increaseItemInCart(cartItemId));
    } else {
      setCount(count + 1);
      dispatch(cartActions.updateCounter(count + 1));
      console.log(count);
    }
  };

  const decreaseCounterHandler = () => {
    if (location.pathname === "/cart") {
      dispatch(cartActions.decreaseItemFromCart(cartItemId));
    } else {
      if (count > 1) {
        setCount(count - 1);
        dispatch(cartActions.updateCounter(count - 1));
      }
    }
  };

  return (
    <div className={classes["add-del-btn"]}>
      <button onClick={decreaseCounterHandler}>-</button>
      <span className={classes["counter-value"]}>
        {particularProductData ? particularProductData.counter : count}
      </span>
      <button onClick={increaseCounterHandler}>+</button>
    </div>
  );
};

export default CounterButton;
