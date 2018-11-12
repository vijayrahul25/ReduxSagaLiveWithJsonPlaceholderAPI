import * as actionType from "./ActionType";
export function showProgress(inProgress, inProgressMessage) {
  return {
    type: actionType.SHOW_PROGRESS,
    payload: {
      inProgress: inProgress,
      inProgressMessage: inProgressMessage
    }
  };
}

export function showError(isError, errorMessage) {
  return {
    type: actionType.SHOW_ERROR,
    payload: { isError: true, errorMessage: errorMessage }
  };
}
