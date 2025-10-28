import { createAsyncThunk } from "@reduxjs/toolkit";
// thunk
export const thunkData = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('response :', response);
    return response.json();
  }
);

