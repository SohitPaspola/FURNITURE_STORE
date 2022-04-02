import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image from "../images/bench.jpg";
import {
  googleSignIn,
  userSignUp,
} from "../store/action-creator/auth-action-creator";
import classes from "./SignUp.module.css";
import { useHistory } from "react-router";
import { authActions } from "../store/reducer/auth-Reducer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const googleSignInHandler = () => {
    console.log("googlesignin");
    dispatch(authActions.toggleLoading(false));
    dispatch(googleSignIn(history));
  };

  const signUpFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log("signupformhandler");

    dispatch(authActions.toggleLoading(true));
    dispatch(userSignUp(email, password, history));
    dispatch(authActions.currentUser(email));
    setEmail("");
    setPassword("");
  };
  return (
    <form className={classes.signup} onSubmit={signUpFormSubmitHandler}>
      <main className={classes["login-main"]}>
        <header className={classes["login-header"]}>
          <h2>C</h2>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </header>
        <section className={classes["login-section"]}>
          <p>START FOR FREE</p>
          <h2>Create an account</h2>
          <div className={classes["user-info"]}>
            <input
              type="email"
              placeholder="Enter your e-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            ></input>
            <input
              type="text"
              placeholder="Set your password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            ></input>
            <button className={classes["signup-button"]} type="submit">
              Sign up
            </button>
          </div>
          <div>
            <button className={classes.google} onClick={googleSignInHandler}>
              Sign up with Google
            </button>
          </div>
          <div className={classes.already}>
            <p>Already have an account ? </p>
            <Link to="/signin">Sign in</Link>
          </div>
        </section>
      </main>
      <img className={classes["login-img"]} src={image} alt="bg"></img>
    </form>
  );
};

export default SignUp;
