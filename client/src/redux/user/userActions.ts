import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/api";

export interface Response {
  data: {
    users: Array<User>;
  };
}
export interface Response2 {
  data: {
    user: User;
  };
}

interface IState {
  name: string;
  email: string;
  phone: string;
}

export const getUsers = createAsyncThunk("userList/getUsers", async () => {
  try {
    const response: Response = await API.get("/api/v1/users");
    return response?.data?.users;
  } catch (err) {
    console.log(err);
  }
});
export const getUser = createAsyncThunk(
  "userList/getUser",
  async (userId: string) => {
    try {
      const response: Response2 = await API.get(
        `http://localhost:5000/api/v1/user/${userId}`
      );

      return response?.data?.user;
    } catch (err) {
      console.log(err);
    }
  }
);
export const addUser = createAsyncThunk(
  "userList/addUser",
  async (updatedData: IState) => {
    try {
      const response: Response = await API.post(
        `http://localhost:5000/api/v1/users`,
        updatedData
      );
      return response?.data?.users;
    } catch (err) {
      console.log(err);
    }
  }
);
export const updateUser = createAsyncThunk(
  "userList/updateUser",
  async ({ userId, updatedData }: { userId: string; updatedData: IState }) => {
    try {
      const response: Response = await API.put(
        `http://localhost:5000/api/v1/user/${userId}`,
        updatedData
      );
      return response?.data?.users;
    } catch (err) {
      console.log(err);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "userList/deleteUser",
  async (userId: string) => {
    try {
      const response: Response = await API.delete(
        `http://localhost:5000/api/v1/user/${userId}`
      );
      return response?.data?.users;
    } catch (err) {
      console.log(err);
    }
  }
);
