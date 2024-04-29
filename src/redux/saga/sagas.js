import { call, takeEvery, put } from "redux-saga/effects";
import { callAPI } from "../Api/api";
import { sagaActions } from "./sagaActions";
import { fetchData } from "../reducers/LoginReducer";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export function* fetchDataSaga() {
  try {
    let result = yield call(() =>
      callAPI({url:API_URL})
    );
    yield put(fetchData(result.data));
  } catch (e) {
    console.error("API Error:----", e); // Log the error for debugging
    yield put(fetchData([{ error: "TODO_FETCH_FAILED"}])); // Dispatch action with error message
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}

