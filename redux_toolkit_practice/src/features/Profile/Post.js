import React from "react";
import { useDispatch } from "react-redux";
import { editPost, deletePost } from "./profileSlice.js";

const Post = ({ text, id }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(false);
  const [editText, setEditText] = React.useState(text);

  const onChange = (e) => {
    setEditText(e.target.value);
  };

  const submitEdit = () => {
    dispatch(editPost({ id, text: editText }));
    setEdit(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!edit ? (
        <>
          <p>{text}</p>
          <button onClick={() => dispatch(deletePost(id))}>Delete</button>
          <button onClick={() => setEdit(!edit)}>edit</button>
        </>
      ) : (
        <>
          <textarea
            onChange={onChange}
            value={editText}
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={submitEdit}>Submit</button>
          <button onClick={() => dispatch(deletePost(id))}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Post;
