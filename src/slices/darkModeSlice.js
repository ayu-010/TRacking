import { createSlice } from '@reduxjs/toolkit';


const initialState = {
 dark:false,
 loading:true
};


// Create a slice
const darkModeSlice = createSlice({
  name: 'darkMode', 
  initialState,
  reducers: {
    
    setLoading(state,value) {
      state.loading = value.payload
    },
   setDarkMode(state, value) {
      state.dark = value.payload
    }
  }
});

// Export actions and reducer
export const { setLoading,setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
