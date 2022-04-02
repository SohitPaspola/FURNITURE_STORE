import { useSelector } from "react-redux";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import classes from "./CartSummary.module.css";

const CartSummary = () => {
  const history = useHistory();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const orderSummaryButtonHandler = () => {
    if (location.pathname === "/cart") {
      history.push("/address");
    }
    if (location.pathname === "/address") {
      history.push("/payment");
    }
  };
  const allItemTotalPrice = useSelector(
    (state) => state.cart.allItemTotalPrice
  );

  const date = new Date();
  date.setDate(date.getDate() + 6);

  const discount = cartItems.length !== 0 ? 500 : 0;
  const totalAfterDiscount = allItemTotalPrice - discount;
  const formattedNumberHandler = (number) => {
    return Number(number)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const formattedAllItemTotalPrice = formattedNumberHandler(allItemTotalPrice);
  const formattedTotalAfterDiscount =
    formattedNumberHandler(totalAfterDiscount);

  return (
    <div className={classes["cart-summary"]}>
      <h2>order summary</h2>
      <div className={classes["cart-sum-desc"]}>
        <div>
          <p>Price</p>
          <p>₹ {formattedAllItemTotalPrice}</p>
        </div>
        <div>
          <p>Discount</p>
          <p>₹ {discount}</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div>
          <p>Coupon Applied</p>
          <p>₹0.00</p>
        </div>
      </div>
      <div className={classes["cart-total"]}>
        <p>TOTAL</p>
        <p>₹ {formattedTotalAfterDiscount}</p>
      </div>
      <div className={classes.estimated}>
        <p>
          Estimated Delivery By <strong>{date.toDateString()}</strong>
        </p>
      </div>
      <div>
        <input
          className={classes["cart-sum-input"]}
          type="text"
          placeholder="Coupon Code"
        ></input>
      </div>
      <div>
        <button
          disabled={cartItems.length === 0}
          className={classes["cart-sum-button"]}
          onClick={orderSummaryButtonHandler}
        >
          {location.pathname === "/address"
            ? "PLACE ORDER"
            : "PROCEED TO CHECKOUT"}
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
