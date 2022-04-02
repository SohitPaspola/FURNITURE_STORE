import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import image from "../images/bench.jpg";
import { userResetPassword } from "../store/action-creator/auth-action-creator";
import classes from "./SignUp.module.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const passwordReset = () => {
    dispatch(userResetPassword(email));
  };

  return (
    <form className={classes.signup}>
      <main className={classes["login-main"]}>
        <header className={classes["login-header"]}>
          <h2>A</h2>
          <Link to="/signin">
            <button>Sign in</button>
          </Link>
        </header>
        <section className={classes["login-section"]}>
          <p>START FOR FREE</p>
          <h2>Forgot Your Password?</h2>
          <div className={classes["user-info"]}>
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="Enter your e-mail"
            ></input>
            <button
              className={classes["signup-button"]}
              type="submit"
              onClick={passwordReset}
            >
              Reset Password
            </button>
          </div>

          <div className={classes.already}>
            <p>Don't have a account ? </p>
            <Link to="/signup">
              <button className={classes.buttonlink}>Sign up</button>
            </Link>
          </div>
        </section>
      </main>
      <img className={classes["login-img"]} src={image} alt="bg"></img>
    </form>
  );
};

export default ForgotPass;
