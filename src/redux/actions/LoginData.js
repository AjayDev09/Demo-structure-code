import { sagaActions } from "../saga/sagaActions";
import store from "../store";
// import types from "../types";



const {dispatch} = store;
export const set_data = data => {
  dispatch({
    type: types.GetData,
    payload: data,
  });
};
export const getTodaSagaData = data => {
  dispatch({ type: sagaActions.FETCH_DATA_SAGA })
};
export const getSecondData = data => {
  dispatch({ type: sagaActions.FETCH_DATA_SAGA_SECOND })
};
export const getThirdData= data => {
  dispatch({ type: sagaActions.FETCH_DATA_SAGA_Third})
};

// export const Count = data => {
//   dispatch({
//     type: 'INCREMENT',
//     payload: data,
//   });
// };
// export const Decrement = data => {
//   dispatch({
//     type: 'Decrement',
//     payload: data,
//   });
// };



 

 