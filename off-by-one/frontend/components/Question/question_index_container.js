import { connect } from 'react-redux';

import { questionsArray } from '../../reducers/selectors';
  import QuestionIndexFooter from './question_index_footer';

const mapStateToProps = (state, {total}) => ({
  total,
  user: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionIndexFooter);
