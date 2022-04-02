import Header from "../components/Header/Header";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <div>
      <Header></Header>
      <div className={classes.order}>
        <h1>
          Thank you for placing the order, Your order has been confirmed and
          will be delivered to you in 5-6 days
        </h1>
      </div>
    </div>
  );
};

export default Payment;
