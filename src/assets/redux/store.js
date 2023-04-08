import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice"
import userReducer from "./userSlice"
import adminReducer from "./adminSlice"

export const store = configureStore ({
     reducer:{
     blog : blogReducer,
     user : userReducer,
     admin : adminReducer
     }
})