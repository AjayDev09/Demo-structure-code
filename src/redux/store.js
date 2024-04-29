import {
  createSlice,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga/sagas";
import sagaSecond from "./saga/sagaSecond";
import sagaThird from "./saga/sagaThird";
import secondDataSlice from "./reducers/SecondReducer";
import { todoSlice } from "./reducers/LoginReducer";
import thirdSlice from "./reducers/ThirdReducer";



let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    secondData: secondDataSlice.reducer,
    thirdData:thirdSlice.reducer
  },
  middleware
});

sagaMiddleware.run(saga);
sagaMiddleware.run(sagaSecond);
sagaMiddleware.run(sagaThird);

export default store;