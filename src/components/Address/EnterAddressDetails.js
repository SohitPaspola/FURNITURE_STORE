import classes from "./EnterAddressDetails.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addressActions } from "../../store/reducer/address-reducer";
import Modal from "../../UI/Modal";
import { alertActions } from "../../store/reducer/alert-reducer";

const initialvalues = {
  country: "",
  fullName: "",
  mobileNo: "",
  pinCode: "",
  houseNo: "",
  street: "",
  town: "",
  state: "",
  checked: false,
};

const EnterAddressDetails = (props) => {
  const editIdData = useSelector((state) => state.address.editIdData);
  const editId = useSelector((state) => state.address.editId);
  const isEditing = useSelector((state) => state.address.isEditing);
  const id = Math.random().toString();
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState(initialvalues);

  const inputValuesHandler = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  console.log("hello");

  if (isEditing) {
    setInputValues(Object.assign(inputValues, editIdData));
    dispatch(addressActions.toggleEditing(null));
  }

  const cancelButtonHandler = () => {
    setInputValues(initialvalues);
    dispatch(addressActions.defaultState());
    dispatch(addressActions.toggleModal(false));
  };

  const addAddressClickHandler = (id, event) => {
    event.preventDefault();

    if (editId) {
      dispatch(
        addressActions.updatedAddress({
          ...inputValues,
          id: Date.now().toString(),
        })
      );
      dispatch(
        alertActions.showAlert({
          status: "success",
          title: "Success!",
          message: "Address Edited Successfully",
        })
      );
    } else {
      dispatch(addressActions.addNewAddress({ ...inputValues, id: id }));
      dispatch(
        alertActions.showAlert({
          status: "success",
          title: "Success!",
          message: "New Address Saved Successfully",
        })
      );
    }

    dispatch(addressActions.defaultState());
    setInputValues(initialvalues);
  };

  return (
    <Modal css="modal">
      <form
        id={id}
        onSubmit={(event) => addAddressClickHandler(id, event)}
        className={classes["enter-address-cont"]}
      >
        <div className={classes["address-h1"]}>
          <h1>Add New Address</h1>
        </div>
        <div className={classes["address-form"]}>
          <label htmlFor="country">Country/Region</label>
          <input
            type="text"
            id="country"
            name="country"
            value={inputValues.country}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="fullname">Full name</label>
          <input
            type="text"
            id="fullname"
            name="fullName"
            value={inputValues.fullName}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="number"
            id="mobile"
            name="mobileNo"
            value={inputValues.mobileNo}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="pincode">Pincode</label>
          <input
            type="number"
            id="pincode"
            name="pinCode"
            value={inputValues.pinCode}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="houseNo">
            flat, house no., building, company, apartment
          </label>
          <input
            type="text"
            id="houseNo"
            name="houseNo"
            value={inputValues.houseNo}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="street">area, street, sector, village</label>
          <input
            type="text"
            id="street"
            name="street"
            value={inputValues.street}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="town">town/city</label>
          <input
            type="text"
            id="town"
            name="town"
            value={inputValues.town}
            onChange={inputValuesHandler}
            required
          ></input>
          <label htmlFor="state">state</label>
          <input
            type="text"
            id="state"
            name="state"
            value={inputValues.state}
            onChange={inputValuesHandler}
            required
          ></input>
        </div>
        <div className={classes["add-address-btn"]}>
          <button type="submit">Add Address</button>
          <button onClick={cancelButtonHandler}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EnterAddressDetails;
