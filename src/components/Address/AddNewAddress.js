import { useDispatch } from "react-redux";
import { addressActions } from "../../store/reducer/address-reducer";
import classes from "./AddNewAddress.module.css";

const AddNewAddress = () => {
  const dispatch = useDispatch();

  const toggleModalHandler = () => {
    dispatch(addressActions.toggleModal(true));
  };

  return (
    <button
      className={classes["new-address-button"]}
      onClick={toggleModalHandler}
    >
      + ADD NEW ADDRESS
    </button>
  );
};

export default AddNewAddress;
