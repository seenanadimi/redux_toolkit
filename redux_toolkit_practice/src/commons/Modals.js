import React from "react";
import { toggleModal } from "../features/Home/homeSlice";
import { useDispatch } from "react-redux";

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const closeModal = (e) => {
    e.stopPropagation();
    dispatch(toggleModal());
  };

  return (
    <>
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-container">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              X
            </button>
            hello
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
