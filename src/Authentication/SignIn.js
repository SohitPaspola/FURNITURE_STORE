import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import image from "../images/bench.jpg";
import {
  googleSignIn,
  userSignIn,
} from "../store/action-creator/auth-action-creator";
import classes from "./SignIn.module.css";
import { authActions } from "../store/reducer/auth-Reducer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  const googleSignInHandler = () => {
    dispatch(authActions.toggleLoading(false));
    dispatch(googleSignIn(history));
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.toggleLoading(true));

    dispatch(userSignIn(email, password, history));
    dispatch(authActions.currentUser(email));
    setEmail("");
    setPassword("");
  };

  return (
    <form className={classes.signup} onSubmit={loginFormSubmitHandler}>
      <main className={classes["login-main"]}>
        <header className={classes["login-header"]}>
          <h2>A</h2>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </header>
        <section className={classes["login-section"]}>
          <p>START FOR FREE</p>
          <h2>Log in to your account</h2>
          <div className={classes["user-info"]}>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Enter your e-mail"
              required
            ></input>
            <input
              type="text"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              placeholder="Enter your password"
              required
            ></input>
            <button className={classes["signup-button"]} type="submit">
              Sign in
            </button>
          </div>
          <div>
            <button className={classes.google} onClick={googleSignInHandler}>
              Sign in with Google
            </button>
            <div className={classes.forgot}>
              <Link to="/reset">Forgot password?</Link>
            </div>
          </div>
          <div className={classes.already}>
            <p>Don't have a account ? </p>
            <Link to="/signup">Sign up</Link>
          </div>
        </section>
      </main>
      <img className={classes["login-img"]} src={image} alt="bg"></img>
    </form>
  );
};

export default SignIn;
