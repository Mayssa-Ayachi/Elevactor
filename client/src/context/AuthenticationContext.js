import createDataContext from "./createDataContext";
import axiosAPI from "../api/axiosAPI";
const authReducer = (state, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ user, password }) => {
    try {
      response = await axiosAPI.post("/signup", { user, password });
    } catch (err) {
      console.log(err.message);
    }
  };
};
const signin = (dispatch) => {
  return ({ user, password }) => {};
};
const signout = (dispatch) => {
  return () => {};
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
