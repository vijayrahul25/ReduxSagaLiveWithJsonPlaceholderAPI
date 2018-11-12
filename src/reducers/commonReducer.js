import * as actionType from "../actions/ActionType";

const initialCommonState = {
  isError: false,
  errorMessage: "",
  inProgress: false,
  inProgressMessage: ""
};
const commonReducer = (state = initialCommonState, action) => {
  switch (action.type) {
    case actionType.SHOW_PROGRESS:
      return {
        ...state,
        inProgress: action.payload.inProgress,
        inProgressMessage: action.payload.inProgressMessage
      };
      break;
    case actionType.SHOW_ERROR:
      return {
        ...state,
        isError: action.payload.isError,
        errorMessage: action.payload.errorMessage,
        inProgress: false
      };
      break;
    default:
      return state;
  }
};

export default commonReducer;
