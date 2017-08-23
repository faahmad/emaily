import axios from 'axios';
import { FETCH_CURRENT_USER, UPDATE_USER, ADD_CREDITS, SUBMIT_SURVEY } from './types';

export const fetchCurrentUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: ADD_CREDITS });
  dispatch({ type: UPDATE_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: SUBMIT_SURVEY });
  dispatch({ type: UPDATE_USER, payload: res.data });
};
