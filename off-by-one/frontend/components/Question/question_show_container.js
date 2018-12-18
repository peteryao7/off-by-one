import { connect } from 'react-redux';
import {
  fetchQuestion,
  deleteQuestion
} from '../../actions/question_actions';
import {
  fetchAnswers
} from '../../actions/answer_actions';
import { selectQuestion } from '../../reducers/selectors';
import { answersArray } from '../../reducers/selectors';
import QuestionShow from './question_show';

const mapStateToProps = (state, {match}) => {
  const user = state.entities.users[state.session.id];
  const questionId = parseInt(match.params.questionId);
  const question = selectQuestion(state.entities, questionId);
  const answers = answersArray(state.entities) || [];
  return {
    user,
    questionId,
    question,
    answers
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id)),
  fetchAnswers: id => dispatch(fetchAnswers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
