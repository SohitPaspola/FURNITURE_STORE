import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { productActions } from "../../store/reducer/ProductReducer";
import classes from "./List.module.css";

const List = ({ id, category, title, price, image }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  let formattedNumber =
    "₹" +
    Number(price)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  const onProductClickHandler = () => {
    dispatch(productActions.getProductInfo(id));
    history.push(`/product/${title}`);
  };

  return (
    <div className={classes.product}>
      <div
        className={classes["product-card"]}
        key={id}
        onClick={onProductClickHandler}
      >
        <div className={classes["product-image"]}>
          <img src={image} alt="furniture"></img>
        </div>
        <div className={classes["product-info"]}>
          <h4>{title}</h4>
          <h5>{formattedNumber}</h5>
        </div>
      </div>
    </div>
  );
};

export default List;
