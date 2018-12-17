import {connect} from 'react-redux';

import {updateQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state, {question}) => {
  return {
    authorId: state.entities.users[state.session.id].id,
    formType: 'edit',
    question
  };
};

const mapDispatchToProps = dispatch => ({
  questionAction: question => dispatch(updateQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
