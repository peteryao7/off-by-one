import * as APIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';


export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question
});

export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions()
    .then(questions => (dispatch(receiveQuestions(questions))
  ))
);

export const fetchQuestion = (id) => dispatch => (
  APIUtil.fetchQuestion(id)
    .then(payload => (dispatch(receiveQuestion(payload))
  ))
);

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question)
    .then(question => (dispatch(receiveQuestion(question))
  ))
);

export const updateQuestion = question => dispatch => (
  APIUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question))
  )
);

export const deleteQuestion = questionId => dispatch => (
  APIUtil.deleteQuestion(questionId)
    .then((questionId) => dispatch(removeQuestion(questionId))
  )
);
