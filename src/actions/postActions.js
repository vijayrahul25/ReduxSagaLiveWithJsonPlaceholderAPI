import * as actionType from "./ActionType";
import { showProgress, showError } from "./commonAction.js";
import axios from "axios";
{
  /*
export const showPosts = () => {
  return dispatch => {
    dispatch(showProgress(true, "Post loading in progress..."));

    let url = "https://jsonplaceholder.typicode.com/posts";
    return axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        dispatch(showProgress(false, ""));

        return response;
      })
      .then(response => {
        setTimeout(() => {
          dispatch(showPostsSuccess(response.data));
        }, 1000);
      })
      .catch(() => dispatch(showError(true, "Error while fetching post.")));
  };
};
*/
}
export function showPosts() {
  return {
    type: actionType.LOAD_POSTS
  };
}
export function showPostsSuccess(request) {
  return {
    type: actionType.SHOW_POSTS_SUCCESS,
    payload: request.data
  };
}
export function showPostsById(id) {
  return dispatch => {
    dispatch(showProgress(true, "Post loading in progress..."));

    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(showProgress(false, ""));

        return response;
      })
      .then(response => dispatch(showPostsByIdSuccess(response.data)))
      .catch(() => dispatch(showError(true, "Error while fetching post.")));
  };
}

export function showPostsByIdSuccess(response) {
  return {
    type: actionType.SHOW_POST_BY_ID_SUCCESS,
    payload: response
  };
}

export function updatePost(data) {
  return dispatch => {
    dispatch(showProgress(true, "Post update in progress..."));

    let url = `https://jsonplaceholder.typicode.com/posts/${data.id}`;
    let postData = {
      id: data.id,
      title: data.title,
      body: data.body,
      userId: data.userId
    };
    let headers = {
      "Content-type": "application/json; charset=UTF-8"
    };

    return axios
      .put(url, postData, headers)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(showProgress(false, ""));

        return response;
      })
      .then(response => dispatch(showPostsByIdSuccess(postData)))
      .catch(() => dispatch(showError(true, "Error while updating post.")));
  };
}
