import axios from 'axios';
import { FETCH_CURRENT_USER } from './types';

export const fetchCurrentUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};
