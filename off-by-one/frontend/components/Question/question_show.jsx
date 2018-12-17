import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import Header from '../Header/header';

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
  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.questionId !== this.props.match.params.questionId) {
      this.props.fetchQuestion(this.props.questionId);
    }
  }

  deleteQuestion(){
    if(this.props.user && this.props.question.user_id === this.props.user.id)
    {
      this.props.deleteQuestion(this.props.questionId);
      this.props.history.push('/');
    } else {
      this.setState({ ['buttonErrors']: [ 'Can only delete your own questions' ]})
    }
  }

  questionFooter(){
    const deleteButton =
    this.props.user && this.props.user.id === this.props.question.user_id ?
    (<button onClick={this.deleteQuestion} className="footer-button">
        delete
      </button>) : null;

    return(
      <div className="question-body-footer">
        <Link to={`/questions/${this.props.questionId}/edit`}>edit</Link>
        <div className="one-em-padding"></div>
        <div className="error-group">{this.state.buttonErrors.map(e => `${e} `)}</div>
        {deleteButton}
    </div>
    );
  }

  // <div className="one-em-padding"></div>
  // posted {timeSinceUpdate(this.props.question.created_at)} hr:min:secs ago
  // <div className="one-em-padding"></div>
  // on {this.props.question.created_at}
  // <div className="one-em-padding"></div>
  // by { this.props.question.user ? this.props.question.user.username : '__'}

  questionBody(){
    return(
      <div className="question-body">
        <div className="float-display">
          <div className="question-body remov-border-of-el">
            <div></div>
            {this.props.question.body}
            <br />
          </div>
      </div>
    </div>
  );
  }

  questionHeader(){
    return(
      <div className="header-section">
        <div className="question-index-header">
          <h1 className="question-title">{this.props.question.title}</h1>
        </div>
        <Link to="/questions/ask" className="link-button">Ask Question</Link>
      </div>
    );
  }
  render() {
    return(
      <div className="content">
        <div className="single-question-show">
          {this.questionHeader()}
          {this.questionBody()}
          {this.questionFooter()}
        </div>
      </div>
    );
  }
}

export default QuestionShow;
