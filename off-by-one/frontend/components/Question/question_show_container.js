import { connect } from 'react-redux';
import {
  fetchQuestion,
  deleteQuestion
} from '../../actions/question_actions';
import { selectQuestion } from '../../reducers/selectors';
import QuestionShow from './question_show';

const mapStateToProps = (state, {match}) => {
  const user = state.entities.users[state.session.id];
  const questionId = parseInt(match.params.questionId);
  const question = selectQuestion(state.entities, questionId);

  return {
    user,
    questionId,
    question
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id)),
  deleteQuestion: id => dispatch(deleteQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow);
