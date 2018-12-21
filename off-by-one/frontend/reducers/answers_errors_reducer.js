import {
  RECEIVE_ANSWER_ERRORS,
} from '../actions/answer_actions';

export default (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
