import * as actionType from "../actions/ActionType";

const initialPostState = {
  posts: []
};
const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case actionType.SHOW_POSTS_SUCCESS:
      return {
        posts: action.payload
      };
      break;
    case actionType.SHOW_POST_BY_ID_SUCCESS:
      let newSTate = state.posts.filter(data => action.payload.id !== data.id);

      var object = Object.assign({}, action.payload);
      return {
        posts: [...newSTate, Object.assign({}, object)]
      };

      break;
    default:
      return state;
  }
};

export default postReducer;
