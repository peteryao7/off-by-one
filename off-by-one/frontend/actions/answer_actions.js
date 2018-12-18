import * as APIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const REMOVE_ANSWER = 'REMOVE_ANSWER';


export const receiveAnswers = answers => ({
  type: RECEIVE_ANSWERS,
  answers
});

export const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer
});

export const removeAnswer = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId
});

export const fetchAnswers = filters => dispatch => (
  APIUtil.fetchAnswers(filters).then(answers => (
    dispatch(receiveAnswers(answers))
  ))
);

export const fetchAnswer = (id) => dispatch => (
  APIUtil.fetchAnswer(id).then(payload => (
    dispatch(receiveAnswer(payload))
  ))
);

export const createAnswer = answer => dispatch => (
  APIUtil.createAnswer(answer).then(answer => (
    dispatch(receiveAnswer(answer))
  ))
);

export const updateAnswer = (answer) => dispatch => (
  APIUtil.updateAnswer(answer)
  .then(answer =>
    dispatch(receiveAnswer(answer))
  )
);

export const deleteAnswer = answerId => dispatch => (
  APIUtil.deleteAnswer(answerId).then(() =>
    dispatch(removeAnswer(answerId))
  )
);
