import { createSlice } from "@reduxjs/toolkit";
import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./userActions";

const initialState: {
  users: User[];
  loading: boolean;
  error: boolean;
  user: User | null;
} = {
  users: [],
  loading: false,
  error: false,
  user: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.user = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload || [];
      })
      .addCase(getUsers.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.users = [];
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload || [];
      })
      .addCase(addUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.users = [];
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.user = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload || null;
      })
      .addCase(getUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.user = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload || [];
        state.user = null;
      })
      .addCase(updateUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.users = [];
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload || [];
        state.user = null;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.users = [];
      });
  },
});

export default usersSlice.reducer;
