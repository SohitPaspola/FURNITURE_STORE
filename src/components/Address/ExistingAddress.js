import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addressActions } from "../../store/reducer/address-reducer";
import { alertActions } from "../../store/reducer/alert-reducer";
import classes from "./ExistingAddress.module.css";

const ExistingAddress = () => {
  
  const [check, setCheck] = useState();

  const addresses = useSelector((state) => state.address.addresses);
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setCheck(event.target.id);
    console.log(check);
  };

  const editButtonClickHandler = (id) => {
    dispatch(addressActions.editAddress(id));
    dispatch(addressActions.toggleEditing(true));
    dispatch(addressActions.toggleModal(true));
  };

  const removeButtonClickHandler = (id) => {
    dispatch(addressActions.removeAddress(id));
    dispatch(
      alertActions.showAlert({
        status: "success",
        title: "Success!",
        message: " Address removed Successfully",
      })
    );
  };

  return (
    <div className={classes["existing-add-cont"]}>
      {addresses.length !== 0
        ? addresses.map((item) => {
            const { id } = item;
            return (
              <div key={id} className={classes["address-list"]}>
                <div className={classes["address-name"]}>
                  <input
                    type="radio"
                    id={id}
                    value={item.street}
                    onChange={changeHandler}
                    checked={id === check}
                  ></input>
                  <label htmlFor={id}>
                    <h2>{item.street}</h2>
                  </label>
                  <button
                    style={{ color: "#E14B4B" }}
                    onClick={() => removeButtonClickHandler(id)}
                  >
                    REMOVE
                  </button>
                  <button
                    style={{ color: "black", borderRight: "1px solid black" }}
                    onClick={() => editButtonClickHandler(id)}
                  >
                    EDIT
                  </button>
                </div>
                <div className={classes["address-info"]}>
                  <p>{item.fullName}</p>
                  <p>
                    {item.houseNo}, {item.town}, {item.state}, {item.country}
                  </p>
                  <div>
                    <span className={classes.contact}>contact - </span>
                    <span>{item.mobileNo}</span>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ExistingAddress;
