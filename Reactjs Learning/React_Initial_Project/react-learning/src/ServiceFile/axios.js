import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export const createUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  return response.data;
};

// Get all users (GET)
export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};