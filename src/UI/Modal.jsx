import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Modal({ children, modalclose }) {
  return createPortal(
    <>
      <div className={styles.modalBackdrop} onClick={modalclose}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,

    document.getElementById("modal"),
  );
}

export default Modal;
