import { combineReducers } from 'redux';

import users from './users_reducer';
import questions from './questions_reducer';
import answers from './answers_reducer';

export default combineReducers({
  users,
  questions,
  answers
});
