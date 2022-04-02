import { auth, db } from "../../Authentication/firebase";
import { addressActions } from "../reducer/address-reducer";

export const sendAddressData = ({ address }) => {
  return async (dispatch) => {
    const currentUserUid = auth.currentUser.uid;

    try {
      await db
        .collection("address" + currentUserUid)
        .doc("userAddress")
        .set(
          {
            address: address.addresses,
          },
          { merge: true }
        );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchUserAddressData = () => {
  return async (dispatch) => {
    const currentUserUid = auth.currentUser.uid;
    if (auth.currentUser) {
      await db
        .collection("address" + currentUserUid)
        .doc("userAddress")
        .onSnapshot((doc) => {
          if (!doc.exists) {
            return;
          }
          console.log(doc.data());
          const userAddress = { ...doc.data() };
          const savedAddressData = {
            addresses: userAddress.address,
          };
          dispatch(addressActions.replaceAddress(savedAddressData));
        });
    } else {
      console.log("user not logged in");
    }
  };
};
