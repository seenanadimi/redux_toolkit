import React from "react";
import { toggleModalOn, toggleModalOff } from "./modalSlice.js";
import { useDispatch } from "react-redux";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(toggleModalOff());
  };

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              X
            </button>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
