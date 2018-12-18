import {connect} from 'react-redux';

import {createAnswer} from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = (state, {questionId}) => ({
  user: state.entities.users[state.session.id],
  questionId,
  formType: 'Answer'
});

const mapDispatchToProps = dispatch => ({
  answerAction: answer => dispatch(createAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
