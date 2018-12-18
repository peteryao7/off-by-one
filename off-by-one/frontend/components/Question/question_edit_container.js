import { connect } from 'react-redux';

import { fetchQuestion } from '../../actions/question_actions';
import { selectQuestion } from '../../reducers/selectors';
import QuestionEdit from './question_edit';

const mapStateToProps = (state, {match}) => {
  const questionId = parseInt(match.params.questionId);
  return {
    questionId,
    question: state.entities.questions[match.params.questionId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: id => dispatch(fetchQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionEdit);
