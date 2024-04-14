import { createSlice } from '@reduxjs/toolkit';


const initialState = {
 loading:false,
 signupData:null,
 isAuthenticated: false,
};

// Create a slice
const authSlice = createSlice({
  name: 'auth', // Unique identifier for the slice
  initialState,
  reducers: {
    
    setLoading(state,value) {
      state.loading = value.payload
    },
   setSignupData(state, value) {
      state.signupData =value.payload
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },

  }
});

// Export actions and reducer
export const { setLoading,setSignupData,setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
