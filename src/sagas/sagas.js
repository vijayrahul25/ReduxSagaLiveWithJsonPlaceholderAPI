import {
  takeLatest,
  fork,
  put,
  call,
  all,
  select,
  take,
  takeEvery
} from "redux-saga/effects";
import * as actionType from "../actions/ActionType";
import { loadAuthorsSuccess } from "../actions/authorActions";
import { showPostsSuccess } from "../actions/postActions";
import { showProgress, showError } from "../actions/commonAction.js";
import axios from "axios";

function getAxios(url) {
  return axios.get(url);
}
const delay = ms => new Promise(res => setTimeout(res, ms));
export function* loadAuthorsSaga() {
  let url = "https://jsonplaceholder.typicode.com/users";
  try {
    yield put(showProgress(true, "Author loading in progress..."));

    const authors = yield call(getAxios, url);

    yield put(showProgress(false, ""));
    yield put(loadAuthorsSuccess(authors));
  } catch (error) {
    yield put(showError(true, "Error while fetching author.")); // dispatch an action
  }
}
export function* loadPostsSaga() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  try {
    yield put(showProgress(true, "Posts loading in progress..."));

    const posts = yield call(getAxios, url);

    yield put(showProgress(false, ""));
    yield put(showPostsSuccess(posts));
  } catch (error) {
    yield put(showError(true, "Error while fetching post.")); // dispatch an action
  }
}

export function* watchLoadAuthors() {
  yield takeEvery(actionType.LOAD_AUTHORS_ASYNC, loadAuthorsSaga);
}
export function* watchLoadPosts() {
  yield takeEvery(actionType.LOAD_POSTS, loadPostsSaga);
}
//loadPostsSaga
export default function* rootSaga() {
  // if you rwant to load author on index page load then add loadAuthorsSaga in yield all.
  yield all([
    fork(loadPostsSaga),
    fork(watchLoadPosts),
    fork(loadAuthorsSaga),
    fork(watchLoadAuthors)
  ]);
}
