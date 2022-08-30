import React from "react";
import Modal from "../../commons/Modals.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "./homeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const modalToggle = useSelector((state) => state.home.modalToggle);

  return (
    <h1>
      HOME PAGE
      <button onClick={() => dispatch(toggleModal())}>Modal</button>
      {modalToggle && <Modal />}
    </h1>
  );
};

export default Home;
