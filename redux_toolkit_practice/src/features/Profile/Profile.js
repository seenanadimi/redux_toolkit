import React from "react";
import { toggleModalOn } from "../../commons/Modal/modalSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../commons/Modal/Modals.js";
import CommentForm from "./CommentForm.js";
import { editPost, deletePost } from "./profileSlice.js";
import Post from "./Post.js";

const Profile = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.profile.post);
  const toggle = useSelector((state) => state.modal.modalToggle);

  const postMap = posts.map((p, index) => (
    <Post key={index} text={p.text} id={p.id} req={p} />
  ));

  return (
    <>
      <h1>Profile Screen</h1>
      <button onClick={() => dispatch(toggleModalOn())}>New Comment</button>
      {toggle && (
        <Modal>
          <CommentForm />
        </Modal>
      )}
      <h6>{postMap}</h6>
    </>
  );
};

export default Profile;
