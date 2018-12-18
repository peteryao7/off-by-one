import merge from 'lodash/merge';

import {
  RECEIVE_ANSWER,
  RECEIVE_ANSWERS,
  REMOVE_ANSWER
} from '../actions/answer_actions';

const answerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWERS:
      return action.answers;
    case RECEIVE_ANSWER:
      const newAnswer = { [action.answer.id]: action.answer}
      return merge({}, state, newAnswer);
    case REMOVE_ANSWER:
      let newState = merge({}, state);
      delete newState[action.answerId];
      return newState;
    default:
      return state;
  }
}

export default answerReducer;
