
import { createSlice } from'@reduxjs/toolkit';

const secondDataSlice = createSlice({
    name: "secondData",
    initialState: {
      data: [],
      error: null
    },
    reducers: {
      fetchSecondDataSuccess: (state, action) => {
        state.data = action.payload;
        state.error = null;
      },
      fetchSecondDataError: (state, action) => {
        state.data = null;
        state.error = action.payload;
      }
    }
  });
  
export const { fetchSecondDataSuccess,fetchSecondDataError } = secondDataSlice.actions;
export default secondDataSlice;
