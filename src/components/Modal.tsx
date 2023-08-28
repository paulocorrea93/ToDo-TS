import React from "react";
import style from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal">
      <div className={style.fade} onClick={closeModal}></div>
      <div className={style.modal}>
        <h2>Texto Modal</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
