import * as actionType from "./ActionType";

const URL = "https://jsonplaceholder.typicode.com/";
export function addUser(user) {
  return { type: actionType.ADD_USER, user: user };
}

export function showPost(posts) {
  return { type: actionType.SHOW_POST, posts: posts };
}
