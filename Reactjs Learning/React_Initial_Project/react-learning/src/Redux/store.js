import { configureStore } from "@reduxjs/toolkit";
import { reducerData } from "../Day 5/reducer";
const store = configureStore({
  reducer: {
    counter: reducerData,

  },
});

export default store; 
