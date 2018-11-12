import * as actionType from "./ActionType";
import { showProgress, showError } from "./commonAction.js";
import axios from "axios";
{
  /*
export function loadAuthors() {
  return dispatch => {
    dispatch(showProgress(true, "Author loading in progress..."));
    let url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(showProgress(false));

        return response;
      })
      .then(response => dispatch(loadAuthorsSuccess(response.data)))
      .catch(() => dispatch(showError(true, "Error while fetching author.")));
  };
}

export function loadAuthorsSuccess(request) {
  return {
    type: actionType.LOAD_AUTHORS,
    payload: request
  };
}
}*/
}
export function loadAuthorsSuccess(request) {
  return {
    type: actionType.LOAD_AUTHORS,
    payload: request.data
  };
}

// will reaad by saga
export function loadAuthors() {
  return {
    type: actionType.LOAD_AUTHORS_ASYNC
  };
}
