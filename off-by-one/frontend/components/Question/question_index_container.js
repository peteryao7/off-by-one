import { connect } from 'react-redux';
import { questionsArray} from '../../reducers/selectors';
import QuestionIndex from './question_index';

const mapStateToProps = (state) => {
  return({ questions: questionsArray(state.entities.questions) || [],
  user: state.entities.users[state.session.id],
})
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
