import React from "react";
import Header from "./commons/Header.js";
import Home from "./features/Home/Home";
import Profile from "./features/Profile/Profile.js";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const home = useSelector((state) => state.home);
  console.log("Home State", home);

  return (
    <div className="App">
      <Header />
      {home.screen === "home" ? <Home /> : <Profile />}
    </div>
  );
}

export default App;
