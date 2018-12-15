import {connect} from 'react-redux';

import {createQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';

const mapStateToProps = (state) => ({
  authorId: state.entities.users[state.session.id].id,
  formType: 'new'
});

const mapDispatchToProps = dispatch => ({
  questionAction: question => dispatch(createQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm);
