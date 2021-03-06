import axios from 'util/Api';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET,
} from '../../util/constants/ActionTypes';

export const setInitUrl = (url) => ({
  type: INIT_URL,
  payload: url,
});

export const userSignUp = ({ email, password, name }) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .post('auth/register', {
        email,
        password,
        name,
      })
      .then(({ data }) => {
        console.log('data:', data);
        if (data.result) {
          localStorage.setItem(
            'token',
            JSON.stringify(data.token.access_token),
          );
          axios.defaults.headers.common.authorization = `Bearer ${data.token.access_token}`;
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: USER_TOKEN_SET, payload: data.token.access_token });
          dispatch({ type: USER_DATA, payload: data.user });
        } else {
          console.log('payload: data.error', data.error);
          dispatch({ type: FETCH_ERROR, payload: 'Network Error' });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log('Error****:', error.message);
      });
  };
};

export const userSignIn = ({ email, password }) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .post('auth/login', {
      email,
      password,
    })
    .then(({ data }) => {
      console.log('userSignIn: ', data);
      if (data.result) {
        localStorage.setItem('token', JSON.stringify(data.token.access_token));
        axios.defaults.headers.common.Authorization = `Bearer ${data.token.access_token}`;
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_TOKEN_SET, payload: data.token.access_token });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    })
    .catch((error) => {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log('Error****:', error.message);
    });
};

export const getUser = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .post('auth/me')
    .then(({ data }) => {
      console.log('userSignIn: ', data);
      if (data.result) {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: USER_DATA, payload: data.user });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    })
    .catch((error) => {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log('Error****:', error.message);
    });
};

export const userSignOut = () => (dispatch) => {
  dispatch({ type: FETCH_START });

  axios
    .post('auth/logout')
    .then(({ data }) => {
      console.log('log out', data);
      if (data.result) {
        localStorage.removeItem('token');
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: SIGNOUT_USER_SUCCESS });
      } else {
        dispatch({ type: FETCH_ERROR, payload: data.error });
      }
    })
    .catch((error) => {
      dispatch({ type: FETCH_ERROR, payload: error.message });
      console.log('Error****:', error.message);
    });
};
