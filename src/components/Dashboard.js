import Header from "./Header/Header";
import image from "../images/HI---Slideshow.jpg";
import classes from "./Dashboard.module.css";
import Explore from "./Section/Explore";
import Content from "./Section/Content";
import { useEffect } from "react";
import { auth } from "../Authentication/firebase";
import { fetchUserAddressData } from "../store/action-creator/address-action";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../store/action-creator/ProductAction";
import { searchActions } from "../store/reducer/searchReducer";
import { useDispatch } from "react-redux";
import { fetchCartData } from "../store/action-creator/cart-action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(searchActions.resetSearchProducts());

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchCartData());
        dispatch(fetchUserAddressData());
      } else {
        console.log("user is not signed in");
      }
    });
  }, [dispatch, history]);

  return (
    <div className={classes.dashboard}>
      <Header></Header>
      <div className={classes["image-container"]}>
        <div className={classes.image}>
          <img src={image} alt="main img"></img>
        </div>
        <Explore></Explore>
        <Content></Content>
      </div>
    </div>
  );
};

export default Dashboard;
