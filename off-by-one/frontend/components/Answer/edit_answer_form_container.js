import {connect} from 'react-redux';

import {updateAnswer} from '../../actions/answer_actions';
import AnswerForm from './answer_form';

const mapStateToProps = (state, { user, answer, resetRenderEditState }) => {
  const userNew = user || {}
  return {
    // user: userNew,
    authorId: userNew.id,
    answerId: answer.id,
    questionId: answer.question_id,
    formType: 'Edit',
    resetRenderEditState: resetRenderEditState,
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
