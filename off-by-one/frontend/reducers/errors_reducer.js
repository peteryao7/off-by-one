import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import question from './questions_errors_reducer';
import answer from './answers_errors_reducer';

const errorsReducer = combineReducers({
  session,
  question,
  answer
});

export default errorsReducer;
