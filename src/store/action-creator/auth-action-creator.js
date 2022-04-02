import { auth, db, googleProvider } from "../../Authentication/firebase";
import { authActions } from "../reducer/auth-Reducer";
import { alertActions } from "../reducer/alert-reducer";

export const userSignIn = (email, password, history) => {
  return async (dispatch) => {
    if (email && password !== "") {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        history.push("/");
        dispatch(authActions.toggleLoading(false));
      } catch (error) {
        dispatch(authActions.toggleLoading(false));
        dispatch(
          alertActions.showAlert({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      }
    }
  };
};

export const userSignUp = (email, password, history) => {
  return async (dispatch) => {
    if (email && password !== "") {
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        db.collection("users").doc(res.user.uid).set({
          email: email,
        });
        history.push("/");
        dispatch(authActions.toggleLoading(false));
      } catch (error) {
        dispatch(authActions.toggleLoading(false));
        dispatch(
          alertActions.showAlert({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      }
    }
  };
};

export const userSignOut = (history) => {
  return async (dispatch) => {
    try {
      await auth.signOut();
      dispatch(authActions.unsubscribeUser());
      history.replace("/signin");
      dispatch(authActions.toggleLoading(false));
    } catch (error) {
      console.log(error.message);
      dispatch(
        alertActions.showAlert({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};

export const userResetPassword = (email) => {
  return (dispatch) => {
    auth
      .sendPasswordResetEmail(email)
      .then(
        dispatch(
          alertActions.showAlert({
            status: "success",
            title: "SUCCESS!",
            message:
              "Check your mail, a password resetting link has been sent to your email address",
          })
        )
      )
      .catch(console.log("reset failed"));
  };
};

export const googleSignIn = (history) => {
  return async (dispatch) => {
    try {
      const response = await auth.signInWithPopup(googleProvider);
      db.collection("users").doc(response.user.uid).set({
        email: response.user.email,
      });
      history.push("/");
      dispatch(authActions.toggleLoading(false));
    } catch (error) {
      dispatch(authActions.toggleLoading(false));
      dispatch(
        alertActions.showAlert({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};
