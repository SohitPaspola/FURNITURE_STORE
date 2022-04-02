import NoAddress from "./NoAddress";
import AddNewAddress from "./AddNewAddress";
import EnterAddressDetails from "./EnterAddressDetails";
import { useSelector } from "react-redux";
import CartSummary from "../../UI/CartSummary";
import ExistingAddress from "./ExistingAddress";
import Header from "../Header/Header";
import { Fragment } from "react";
import classes from "./Address.module.css";

const Address = () => {
  const showModal = useSelector((state) => state.address.showModal);
  const addresses = useSelector((state) => state.address.addresses);

  const showCartSummary = addresses.length !== 0;

  return (
    <Fragment>
      <Header></Header>
      <div className={classes["address-cont"]}>
        <h1 className={classes["address-h2"]}>Your Addresses</h1>
        <ExistingAddress></ExistingAddress>
        <NoAddress></NoAddress>
        <AddNewAddress></AddNewAddress>
        {showCartSummary && <CartSummary></CartSummary>}
        {showModal && <EnterAddressDetails></EnterAddressDetails>}
      </div>
    </Fragment>
  );
};

export default Address;
