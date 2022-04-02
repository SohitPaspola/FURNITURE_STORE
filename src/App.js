import "./App.css";
import SignIn from "./Authentication/SignIn";
import SignUp from "./Authentication/SignUp";
import PrivateRoute from "./Authentication/PrivateRoute";
import ForgotPass from "./Authentication/ForgotPass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Category from "./components/ListProduct/Category";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ParticularProduct from "./components/Product/ParticularProduct";
import CartItem from "./components/Cart/Cart";
import Address from "./components/Address/Address";
import Payment from "./payment/payment";
import { sendCartData } from "./store/action-creator/cart-action";
import { sendAddressData } from "./store/action-creator/address-action";
import Alert from "./UI/Alert";
import LoadingSpinner from "./UI/LoadingSpinner";
import Profile from "./components/UserProfile/Profile";

let cartInitialState = true;
let addressInitialState = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const address = useSelector((state) => state.address);
  const alertData = useSelector((state) => state.alert.alertData);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (cartInitialState) {
      cartInitialState = false;
      return;
    }
    if (cart.changed) {
      dispatch(
        sendCartData({
          cart,
        })
      );
    }
  }, [dispatch, cart]);

  useEffect(() => {
    if (addressInitialState) {
      addressInitialState = false;
      return;
    }
    if (address.changed) {
      dispatch(sendAddressData({ address }));
    }
  }, [dispatch, address]);

  return (
    <Fragment>
      {alertData && (
        <Alert
          status={alertData.status}
          title={alertData.title}
          message={alertData.message}
        ></Alert>
      )}
      {loading && <LoadingSpinner></LoadingSpinner>}
      {!loading && (
        <div className="App">
          <Router>
            <Switch>
              <PrivateRoute path="/" component={Dashboard} exact></PrivateRoute>
              <PrivateRoute path="/" component={Dashboard} exact></PrivateRoute>
              <Route path="/reset" component={ForgotPass} exact></Route>
              <Route path="/signup" component={SignUp} exact></Route>
              <Route path="/signin" component={SignIn} exact></Route>
              <Route
                path="/category/:productCategory"
                component={Category}
              ></Route>
              <Route
                path="/product/:productInfo"
                component={ParticularProduct}
                exact
              ></Route>
              <Route path="/cart" component={CartItem}></Route>
              <Route path="/address" component={Address} exact></Route>
              <Route path="/payment" component={Payment}></Route>
              <PrivateRoute
                path="/userprofile"
                component={Profile}
              ></PrivateRoute>
            </Switch>
          </Router>
        </div>
      )}
    </Fragment>
  );
}

export default App;
