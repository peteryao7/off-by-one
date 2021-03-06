import {connect} from 'react-redux';

import {createAnswer} from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = (state, {questionId}) => ({
  errors: state.errors.answer,
  user: state.entities.users[state.session.id],
  authorId: state.session.id,
  questionId: questionId,
  formType: 'Answer'
});

const mapDispatchToProps = dispatch => ({
  answerAction: answer => dispatch(createAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
