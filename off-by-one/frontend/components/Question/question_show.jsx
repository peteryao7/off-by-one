import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import NewAnswerFormContainer from '../Answer/new_answer_form_container';


class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonErrors: []
    }
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    this.props.fetchQuestion(this.props.questionId);
    this.props.fetchAnswers({question_id: this.props.questionId});
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.questionId !== this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.questionId);
    }
  }

  deleteQuestion(){
    if(this.props.question.author_id === this.props.user.id)
    {
      this.props.deleteQuestion(this.props.questionId);
      this.props.history.push('/');
    } else {
      this.setState({ ['buttonErrors']: [ 'Can only delete your own questions' ]})
    }
  }


  // <div className="one-em-padding"></div>
  // posted {timeSinceUpdate(this.props.question.created_at)} hr:min:secs ago
  // <div className="one-em-padding"></div>
  // on {this.props.question.created_at}
  // <div className="one-em-padding"></div>
  // by { this.props.question.user ? this.props.question.user.username : '__'}

  render() {

    if (this.props.question.title) {

      return(
      <div className="content">
        <div className="single-question-show">

          <div className="header-section-question">
            <div className="question-index-header">
              <h1 className="question-title-show">{this.props.question.title}</h1>
            </div>
            <Link to="/questions/ask" className="link-button">Ask Question</Link>
          </div>

          <div className="question-body">
            <div className="float-display">
                {this.props.question.body}
                <br />
            </div>
          </div>

        <div className="question-body-footer">

          <div className="edit-delete-buttons">
            <Link to={`/questions/${this.props.questionId}/edit`}>edit</Link>&nbsp;&nbsp;&nbsp;
            <button onClick={this.deleteQuestion} className="footer-button">
              delete
            </button>
          </div>
          &nbsp;
          <div className="error-group">{this.state.buttonErrors.map(e => `${e} `)}</div>

          &nbsp;&nbsp;&nbsp;
          <div className="author"> asked on { this.props.question.created_at.slice(0, 10) }&nbsp;
            by { this.props.question.authorName ? this.props.question.authorName : '__'}
          </div>
        </div>

        <NewAnswerFormContainer questionId={this.props.questionId} />

        </div>
      </div>
    ) } else {
      return (<div className="error-question-page">
      <div className="error-question"> Page Not Found </div> <br />
      <div className="error-question-message"> We're sorry, we couldn't find the page you requested. </div> <br />
      <div className="error-link-page"> Browse our <Link to="/" className="no-question-link">recent questions</Link> </div><br />
      </div>)
    }
  }
}

export default QuestionShow;
