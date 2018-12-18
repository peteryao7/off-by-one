import {connect} from 'react-redux';

import {updateAnswer} from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = (state, { user, answer }) => {
  return {
    authorId: user.id,
    answerId: answer.id,
    questionId: answer.question_id,
    formType: 'Edit',
    answer: answer
  };
};

const mapDispatchToProps = dispatch => ({
  answerAction: answer => dispatch(updateAnswer(answer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
