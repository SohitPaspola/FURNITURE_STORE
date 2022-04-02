import { useSelector } from "react-redux";
import CartSummary from "../../UI/CartSummary";
import Header from "../Header/Header";
import classes from "./Cart.module.css";
import Cartitem from "./CartItem";

const CartItem = () => {
  const totalCartItems = useSelector((state) => state.cart.totalNoOfItems);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <Header></Header>
      <header className={classes["cart-header"]}>
        <h2>Cart</h2>
        <h3>{totalCartItems} ITEMS</h3>
      </header>
      {cartItems.length !== 0 ? (
        <div className={classes["cart-section"]}>
          <Cartitem></Cartitem>
          <CartSummary></CartSummary>
        </div>
      ) : (
        <div>No item in the cart</div>
      )}
    </div>
  );
};

export default CartItem;
