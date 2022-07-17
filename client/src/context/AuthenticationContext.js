import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosAPI from "../api/axiosAPI";
const authReducer = (state, actions) => {
  switch (actions.type) {
    case "add_error":
      return { ...state, errorMessage: actions.payload };
    case "signin":
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
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      callback();
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup. ",
      });
    }
  };
};
const signin = (dispatch) => {
  return async ({ user, password }, callback) => {
    try {
      const response = await axiosAPI.post("/signin", { user, password });
      console.log(response.data.token);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "sigin", payload: response.data.token });
      callback();
    } catch (err) {
      dispatch({
        type: "add_err",
        payload: "Something went wrong with sign in",
      });
    }
  };
};
const signout = (dispatch) => {
  return () => {};
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
