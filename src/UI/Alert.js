import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { alertActions } from "../store/reducer/alert-reducer";
import classes from "./Alert.module.css";

const Alert = ({ status, title, message }) => {
  const dispatch = useDispatch();
  let alertClass = "";

  if (status === "error") {
    alertClass = classes.error;
  }

  if (status === "success") {
    alertClass = classes.success;
  }

  const alertCss = `${classes.alert} ${alertClass}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(alertActions.removeAlert());
    }, 2000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className={alertCss}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
