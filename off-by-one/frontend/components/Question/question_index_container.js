import { connect } from 'react-redux';
import { questionsArray} from '../../reducers/selectors';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/question_actions'

const mapStateToProps = (state) => {
    return({ questions: questionsArray(state.entities.questions) || [],
    users: state.entities.users
  })
};

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndex);
