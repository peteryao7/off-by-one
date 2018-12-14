import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_QUESTION
} from '../actions/question_actions';

import merge from 'lodash/merge';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return merge({}, state, { [action.question.id]: action.question });
    case REMOVE_QUESTION:
      let newState = merge({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  }
}

export default questionReducer;
