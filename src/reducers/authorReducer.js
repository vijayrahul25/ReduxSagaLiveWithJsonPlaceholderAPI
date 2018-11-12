import * as actionType from "../actions/ActionType";

const initialPostState = {
  authors: []
};
const authorReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case actionType.LOAD_AUTHORS:
      return {
        authors: action.payload
      };
      break;
    default:
      return state;
  }
};

export default authorReducer;
