import createDataContext from "./createDataContext";
import axiosAPI from "../api/axiosAPI";
const authReducer = (state, actions) => {
  switch (actions.type) {
    case "add_error":
      return { ...state, errorMessage: actions.payload };
    case "signup":
      return { errorMessage: "", token: actions.payload };
    default:
      return state;
  }
};
const signup = (dispatch) => {
  return async ({ email, password, user, adress, phone }, callback) => {
    try {
      response = await axiosAPI.post("/signup", {
        email,
        password,
        user,
        adress,
        phone,
      });
      // await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      callback();
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup. Try again.",
      });
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
  { token: null, errorMessage: "" }
);
