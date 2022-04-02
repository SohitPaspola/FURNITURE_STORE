import { useSelector } from "react-redux";

const NoAddress = () => {
  const addresses = useSelector((state) => state.address.addresses);

  const addressFunc = () => {
    if (addresses.length === 0) {
      return (
        <div>
          <h2>No Existing Address Found, Please Add a new address</h2>
        </div>
      );
    }
  };

  return <div>{addressFunc()}</div>;
};

export default NoAddress;
