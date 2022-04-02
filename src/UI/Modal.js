import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  const { css } = props;
  return (
    <div className={css}>
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { css } = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop></BackDrop>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay css={css}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
