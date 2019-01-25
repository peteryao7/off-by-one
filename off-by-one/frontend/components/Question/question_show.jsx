import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import NewAnswerFormContainer from '../Answer/new_answer_form_container';
import AnswerIndex from '../Answer/answer_index';
import RightSidebar from '../RightSidebar/right_sidebar'

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonErrors: []
    }
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount(){
    this.props.fetchQuestion(this.props.questionId);
    this.props.fetchAnswers({question_id: this.props.questionId});
    console.log("hi show should scroll");
    window.scrollTo(0,0);
    // document.querySelector(".mdl-layout__content").scrollTop = 0;

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

  render() {

    if (this.props.question.title) {

      return(
      <div className="content">
        <div className="single-question-show">

          <div className="header-section-question">
            <div className="question-index-header">
              <h1 className="question-title-show">{this.props.question.title}</h1>
            </div>
            <Link to="/questions/ask" className="link-button-splash">Ask Question</Link>
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
          <div className="author"> asked on { this.props.question.created_at.slice(0, 10) } by { this.props.question.authorName ? this.props.question.authorName : '__'}
          </div>
        </div>
        <AnswerIndex answers={this.props.answers}/>
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
