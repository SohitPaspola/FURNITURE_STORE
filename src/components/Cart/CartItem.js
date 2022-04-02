import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../store/reducer/alert-reducer";
import { cartActions } from "../../store/reducer/cart-reducer";
import CounterButton from "../../UI/CounterButton";
import classes from "./CartItem.module.css";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const removeParticularItemHandler = (id) => {
    dispatch(cartActions.removeParticularItemFromCart(id));
    dispatch(
      alertActions.showAlert({
        status: "success",
        title: "Success!",
        message: " Address removed Successfully",
      })
    );
  };

  return (
    <div className={classes["cart-items"]}>
      {cartItems.map((item) => {
        const { id, title, icons, price, totalPrice } = item;
        let formattedPrice =
          "₹" +
          Number(price)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        let formattedTotalPrice =
          "₹" +
          Number(totalPrice)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return (
          <div
            key={Math.random().toString(36).slice(2)}
            className={classes["cart-item-cont"]}
          >
            <div className={classes["cart-item-img"]}>
              <img src={icons} alt="cart-item"></img>
            </div>

            <div className={classes["cart-item-info"]}>
              <div className={classes["cart-item-name"]}>
                <h3>{title}</h3>
                <h4 className={classes["cart-item-price"]}>{formattedPrice}</h4>
              </div>

              <div className={classes["cart-item-desc"]}>
                <p>color</p>
                <h4>Lysed bright green</h4>
              </div>

              <div className={classes["cart-item-btn"]}>
                <CounterButton cartItemId={id}></CounterButton>
                <button
                  className={classes["remove-btn"]}
                  onClick={() => removeParticularItemHandler(id)}
                >
                  REMOVE
                </button>
                <h3>Total = {formattedTotalPrice}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
