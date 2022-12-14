import React from "react";
import Modal from "../../commons/Modal/Modals.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalOn } from "../../commons/Modal/modalSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.modal.modalToggle);

  return (
    <>
      <h1>HOME PAGE</h1>
      <button onClick={() => dispatch(toggleModalOn())}>Modal</button>
      {toggle && <Modal />}
    </>
  );
};

export default Home;
