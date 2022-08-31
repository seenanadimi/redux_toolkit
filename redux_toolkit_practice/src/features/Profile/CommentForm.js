import e from "cors";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { newPost } from "./profileSlice.js";
import { toggleModalOff } from "../../commons/Modal/modalSlice.js";

const CommentForm = () => {
  const dispatch = useDispatch();
  
  const [text, setText] = React.useState("");

  const onSubmit = () => {
    dispatch(toggleModalOff());
    dispatch(newPost(text));
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>CommentForm</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <textarea
          placeholder="Enter text here..."
          cols="30"
          rows="5"
          onChange={onChange}
          value={text}
        />
        <button onClick={onSubmit}>Add Comment</button>
      </div>
    </>
  );
};

export default CommentForm;
