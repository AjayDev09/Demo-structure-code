
import { createSlice } from'@reduxjs/toolkit';

const thirdSlice = createSlice({
    name: "third",
    initialState: {
      data: [],
      error: null
    },
    reducers: {
      fetchThirdSuccess: (state, action) => {
        state.data = action.payload;
        state.error = null;
      },
      fetchThirdError: (state, action) => {
        state.data = null;
        state.error = action.payload;
      }
    }
  });
  
export const { fetchThirdSuccess,fetchThirdError } = thirdSlice.actions;
export default thirdSlice;
