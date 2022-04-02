import { useDispatch, useSelector } from "react-redux";
import classes from "./Profile.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { userSignOut } from "../../store/action-creator/auth-action-creator";
import { authActions } from "../../store/reducer/auth-Reducer";
import Header from "../Header/Header";
import { Fragment } from "react";

const Profile = () => {
  const userEmail = useSelector((state) => state.auth.userEmail);
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutButtonHandler = () => {
    dispatch(authActions.toggleLoading(true));
    dispatch(userSignOut(history));
  };

  return (
    <Fragment>
      <Header></Header>

      <div className={classes.userprofile}>
        <label htmlFor="userprofile">User-Email : </label>
        <h1 id="userprofile">{userEmail}</h1>
        <div>
          <button onClick={logoutButtonHandler}>Logout</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
