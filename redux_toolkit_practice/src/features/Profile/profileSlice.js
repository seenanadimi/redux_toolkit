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
      const newPost = {
        id: Math.random() * 100,
        text: action.payload,
      };
      // let newPost = [...state.post, action.payload];
      state.post.push(newPost);
      state.count += 1;
    },
    deletePost: (state, action) => {
      state.post = state.post.filter((post) => post.id !== action.payload);
      state.count -= 1;
    },
    editPost(state, action) {
      let post = [...state.post, action.payload];
      state.post = post;
    },
  },
});

export const { newPost, editPost, deletePost } = profileSlice.actions;

export default profileSlice.reducer;
