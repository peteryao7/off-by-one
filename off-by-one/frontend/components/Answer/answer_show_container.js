import { connect } from 'react-redux';

import {
  fetchAnswer,
  deleteAnswer
} from '../../actions/answer_actions';
import { selectAnswer} from '../../reducers/selectors';
import AnswerShow from './answer_show';

const mapStateToProps = (state, {answer, answerId}) => {

  const user = state.entities.users[state.session.id];
  return {
    user,
    answerId,
    answer
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAnswer: id => dispatch(fetchAnswer(id)),
  deleteAnswer: id => dispatch(deleteAnswer(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerShow);
