import { useDispatch, useSelector } from "react-redux";
import classes from "./ParticularProduct.module.css";
import Header from "../Header/Header";
import { CgArrowLongLeft } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { BsFillOctagonFill } from "react-icons/bs";
import { useState } from "react";
import { cartActions } from "../../store/reducer/cart-reducer";
import CounterButton from "../../UI/CounterButton";
import { alertActions } from "../../store/reducer/alert-reducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ParticularProduct = () => {
  const products = useSelector((state) => state.product.products);
  const pId = useSelector((state) => state.product.productId);
  const item = products.find((item) => item.id === pId);
  console.log(item);
  const { id, title, price, icons, description } = item;
  const [imgSrc, setImgSrc] = useState(icons[0]);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.counter);
  const history = useHistory();

  let formattedNumber = Number(price)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const location = useLocation();

  const backButtonHandler = () => {
    history.goBack();
  };

  const onHoverHandler = (icon) => {
    setImgSrc(icon);
    console.log(imgSrc);
  };

  const addToCartClickHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price, icons, counter }));
    dispatch(cartActions.updateCounter(1));
    dispatch(
      alertActions.showAlert({
        status: "success",
        title: "Success!",
        message: " Item added to the cart successfully",
      })
    );
  };

  return (
    <div key={id} className={classes["product-page"]}>
      <div className={classes["product-nav"]}>
        <Header></Header>
        <div className={classes.path}>
          <button onClick={backButtonHandler}>
            <CgArrowLongLeft fontSize={35} color="#17183B"></CgArrowLongLeft>
          </button>
          <h3>{location.pathname}</h3>
        </div>
      </div>
      <div className={classes["product-div"]}>
        <div className={classes["product-section"]}>
          <div className={classes["product-info"]}>
            <h2>{title}</h2>
            <h2>₹ {formattedNumber}</h2>
            <p>{description}</p>
            <div className={classes["circle-icons"]}>
              <BsFillOctagonFill
                className="py-3"
                color="#C1BDB3"
                style={{ margin: "5px" }}
              ></BsFillOctagonFill>
              <BsFillOctagonFill
                className="octagon"
                color="#58737D"
                style={{ margin: "5px" }}
              ></BsFillOctagonFill>
              <BsFillOctagonFill
                className="octagon"
                color="#545454"
                style={{ margin: "5px" }}
              ></BsFillOctagonFill>
              <BsFillOctagonFill
                className="octagon"
                color="#CBA5A5"
                style={{ margin: "5px" }}
              ></BsFillOctagonFill>
            </div>

            <div className={classes["cart-buttons"]}>
              <CounterButton></CounterButton>

              <div className={classes.addtocart}>
                <button onClick={addToCartClickHandler}>Add to Cart</button>
              </div>
            </div>
            <div className={classes["product-footer"]}>
              <p>Free 2-5 day shipping • Tool-free assembly • 30-day trial</p>
            </div>
          </div>
        </div>

        <div className={classes["product-images"]}>
          <div className={classes["product-img-cont"]}>
            <img className={classes.productimg} src={imgSrc} alt="i"></img>
          </div>

          <div className={classes["product-thumb"]}>
            {icons.map((icon) => {
              return (
                <div className={classes["thumb-image"]}>
                  <img
                    key={Math.random().toString()}
                    src={icon}
                    onMouseDown={() => onHoverHandler(icon)}
                    alt="i"
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticularProduct;
