// import types from "../types";

// const init1 = {
//   get_data: '',
// };

// export const get_data = (state = init1, action) => {
//   switch (action.type) {
//     case types.GetData:
//       return action.payload;
//     default:
//       return {...state};
//   }
// };
// // reducers.js
// const initialState = {
//   count: 0
// };

// export const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1
//       };
//     case 'Decrement':
//       return {
//         ...state,
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// };

import { createSlice } from'@reduxjs/toolkit';



export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: []
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        todos: action.payload
      };
    }
  }
});

export const { fetchData } = todoSlice.actions;


