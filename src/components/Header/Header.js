import classes from "./Header.module.css";
import logo from "../../Icons/couchdb.png";
import Search from "./Search";
import { Link } from "react-router-dom";
import UserSvg from "../../Icons/SVG/UserSvg";
import HeartSvg from "../../Icons/SVG/HeartSvg";
import CartSvg from "../../Icons/SVG/CartSvg";
import LocationSvg from "../../Icons/SVG/LocationSvg";
import { useSelector } from "react-redux";

const Header = () => {
  const totalCartItems = useSelector((state) => state.cart.totalNoOfItems);

  return (
    <div className={classes["header-container"]}>
      <div className={classes.header}>
        <div className={classes["logo-name"]}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo"></img>
            <h1>CoZy</h1>
          </Link>
        </div>
        <Search></Search>
        <div className={classes["header-icons"]}>
          <ul>
            <li>
              <Link to="/userprofile">
                <span>
                  <UserSvg></UserSvg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <HeartSvg></HeartSvg>
                </span>
                <span>
                  <sup>0</sup>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <span>
                  <CartSvg></CartSvg>
                </span>
                <span>
                  <sup>{totalCartItems}</sup>
                </span>
              </Link>
            </li>
            <li className={classes.location}>
              <Link to="/address">
                <span>
                  <LocationSvg></LocationSvg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
