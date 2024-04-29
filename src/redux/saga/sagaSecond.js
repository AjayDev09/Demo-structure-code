import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { fetchData } from "../store";
import { callAPI } from "../Api/api";
import { fetchSecondDataError, fetchSecondDataSuccess } from "../reducers/SecondReducer";
import { sagaActions } from "./sagaActions";



const SECOND_API_URL = "https://jsonplaceholder.typicode.com/posts/1";

export function* fetchSecondDataSaga() {
    try {
      let result = yield call(() =>
        callAPI({ url: SECOND_API_URL })
      );
      yield put(fetchSecondDataSuccess(result.data));
    } catch (e) {
      console.error("Second API Error:----", e);
      yield put(fetchSecondDataError(e.message));
    }
  }

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA_SECOND, fetchSecondDataSaga);
}