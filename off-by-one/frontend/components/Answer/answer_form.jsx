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
      userId: this.props.user ? this.props.user.id : null,
      body: body,
      buttonErrors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.formType === 'Edit' && nextProps.answer){
      this.setState({
        ['userId']:nextProps.answer.user_id,
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
    if(this.props.formType === 'Edit') return (<h1 className="question-title manila">Your edit will not be placed in a queue until it is peer reviewed. We welcome all devisive edits, but please make them infernal. Avoid trivial edits unless cardinally necessary.</h1>);
    else return (<div></div>);
  }
  answerQuestion(component){
    const header = this.props.formType === 'Edit' ? "Edit Answer" : "Answer"
    //  className="content"
    return (
      <>

          <div className="header-section">
            <div className="question-index-header">
              <h1 className="question-title">{header}</h1>
            </div>
          </div>
        <div className="single-question-show">
          {this.editHeaderMessage()}
          <div className="question-body">{component}</div>
          {this.editShow()}
        </div>
      </>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.userId){
      if(this.props.formType === 'Edit'){
        this.props.answerAction({
          id: this.state.id,
          question_id: this.state.questionId,
          body: this.state.body,
        });
        this.props.resetRenderEditState();
      } else {
        const formData = new FormData();
        formData.append('answer[user_id]', this.state.userId);
        formData.append('answer[question_id]', this.state.questionId);
        formData.append('answer[body]', this.state.body);
        this.props.answerAction(formData);
      }
      this.navigateToShow();
    } else {
      this.setState({['buttonErrors']:["must be logged in to answer questions"]});
      window.setTimeout(() => this.setState({['buttonErrors']:[]}), 4000);
    }
  }


  render(){
    const { title, body } = this.state;
    return(
      <div className="new-question-container">
        {this.answerQuestion(
          <form onSubmit={this.handleSubmit}>
            <label className="question-field">
              Body
              <br />
              <div className="question-text-input-area">
                <textarea
                  value={body}
                  onChange={this.update('body')}
                  className="question-input-field"
                  />
              </div>
            </label>
            <br />
            <div>
              <div className="right-error-group">
                {this.state.buttonErrors.map(e =>`${e} `)}
              </div>
              <input type="submit" value={`${this.props.formType}`}
                className="new-question-button" />
            </div>
          </form>
        )}
      </div>
    );
  }
}
export default withRouter(AnswerForm);
