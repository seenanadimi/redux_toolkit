import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  post: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    newPost: (state, action) => {
      const random = Math.random() * 100;
      const roundNum = Math.floor(random);
      const newPost = {
        id: roundNum,
        text: action.payload,
      };
      state.post.push(newPost);
      state.count += 1;
    },
    deletePost: (state, action) => {
      state.post = state.post.filter((post) => post.id !== action.payload);
      state.count -= 1;
    },
    editPost: (state, action) => {
      if (action.payload && action.payload.id) {
        const editIndex = state.post.findIndex(
          (post) => post.id === action.payload.id
        );
        state.post[editIndex].text = action.payload.text;
      }
    },
  },
});

export const { newPost, editPost, deletePost } = profileSlice.actions;

export default profileSlice.reducer;
