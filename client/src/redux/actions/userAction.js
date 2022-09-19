import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_OTP_FAIL,
  USER_OTP_REQUEST,
  USER_OTP_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userContants";

export const logout = () => (dispatch) => {
  localStorage.removeItem("auth");
  dispatch({ type: USER_LOGOUT });
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = { headers: { "Contnet-Type": "application/json" } };
    const { data } = await axios.post(
      `${baseUrl}/login`,
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("auth", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (full_name, user_name, email, password, dob) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });
      const config = { headers: { "Contnet-Type": "application/json" } };
      const { data } = await axios.post(
        `${baseUrl}/register`,
        { full_name, user_name, email, password, dob },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      // dispatch({
      //   type: USER_LOGIN_SUCCESS,
      //   payload: data,
      // });
      localStorage.setItem("auth", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const sendOtp = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_OTP_REQUEST });
    const config = { headers: { "Contnet-Type": "application/json" } };
    const {
      userLogin: {
        userInfo: { data },
      },
    } = getState();

    const body = { email: data[0].email, user_name: data[0].user_name };
    const res = await axios.post(`${baseUrl}/sendOtp`, body, config);

    dispatch({
      type: USER_OTP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_OTP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
