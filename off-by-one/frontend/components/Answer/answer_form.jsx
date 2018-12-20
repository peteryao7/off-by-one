import React from 'react';
import {withRouter} from 'react-router-dom';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    let answerId = this.props.answerId;
    let questionId = this.props.questionId;
    let body = this.props.answer ? this.props.answer.body : '';

    this.state={
      id: answerId,
      questionId: questionId,
      authorId: this.props.user ? this.props.user.id : null,
      body: body,
      buttonErrors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  //formData (deprecated)
  componentWillReceiveProps(nextProps){
    if(this.props.formType === 'Edit' && nextProps.answer){
      this.setState({
        ['authorId']:nextProps.answer.user_id,
        ['questionId']:nextProps.answer.question_id,
        ['body']:nextProps.answer.body,
        ['id']:nextProps.answer.id
      });
    }
  }

  navigateToShow() {
    this.setState({ ['body']: ''})
    this.props.history.push(`/questions/${this.props.questionId}`);
  }

  update(property){
    return e => this.setState({
      [property]: e.target.value
    });
  }

  editShow(){
    if(this.props.formType === 'Edit'){
      return(
        <div className="question-body">
          {this.state.body}
        </div>
      );
    } else return (<div></div>);
  }

  editHeaderMessage(){
    if(this.props.formType === 'Edit') return (<h1 className="edit-header-message">
    Your edit will be placed in a queue until it is peer reviewed.
    <br/><br/>
    We welcome all constructive edits, but please make them substantial. Avoid trivial edits unless absolutely necessary.</h1>);
    else return (<div></div>);
  }


  answerQuestion(component){
    const header = this.props.formType === 'Edit' ? "Edit Answer" : "Your Answer"

    return (
      <div>
        <div className="header-section">
          <div className="answer-index-header">
            <h1 className="answer-title">{header}</h1>
          </div>
        </div>

        <div className="single-question-show">
          {this.editHeaderMessage()}
          <div className="question-body">{component}</div>
          {this.editShow()}
        </div>
      </div>
    );
  }

  componentDidUpdate(nextProps) {
    // this.props.user = this.nextProps.user;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.authorId){
      if(this.props.formType === 'Edit'){
        this.props.answerAction({
          id: this.state.id,
          question_id: this.state.questionId,
          body: this.state.body,
        });
        this.props.resetRenderEditState();
      } else {
        const formData = new FormData();
        formData.append('answer[id]', this.state.id);
        formData.append('answer[author_id]', this.state.authorId);
        formData.append('answer[question_id]', this.state.questionId);
        formData.append('answer[body]', this.state.body);
        this.props.answerAction(formData);
      }
      this.navigateToShow();
    } else {
      this.setState({['buttonErrors']:["You must be logged in to answer questions."]});
      window.setTimeout(() => this.setState({['buttonErrors']:[]}), 1000);
    }
  }

  render(){
    const { title, body } = this.state;
    let buttonText;

    if (this.props.formType === 'Answer') {
      buttonText = "Post Your Answer";
    } else if (this.props.formType === 'Edit') {
      buttonText = "Save Edits";
    }
    return(
      <div className="new-answer-container">
        {this.answerQuestion(
          <form onSubmit={this.handleSubmit}>
            <label className="answer-field">
              Body
              <br />
              <div className="question-text-input-area">
                <textarea
                  value={body}
                  onChange={this.update('body')}
                  className="answer-input-field"
                  />
              </div>
            </label>
            <br />
            <div>
              <div className="right-error-group">
                {this.state.buttonErrors.map(e =>`${e} `)}
              </div>
              <input type="submit" value={`${buttonText}`}
                className="new-answer-button" />
            </div>
          </form>
        )}
      </div>
    );
  }
}
export default withRouter(AnswerForm);
