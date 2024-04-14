import { combineReducers } from "@reduxjs/toolkit";
import darkReducer from "../slices/darkModeSlice"

import authReducer from "../slices/authSlice";
const rootReducer=combineReducers({
  auth:authReducer,
  darkMode:darkReducer
})

export default rootReducer