import React from "react";
import { useDispatch } from "react-redux";
import { setScreen } from "../features/Home/homeSlice.js";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(setScreen("home"))}>Home</button>
      <button onClick={() => dispatch(setScreen("profile"))}>Profile</button>
    </>
  );
};

export default Header;
