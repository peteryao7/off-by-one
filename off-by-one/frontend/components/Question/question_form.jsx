import React from 'react';
import {withRouter} from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    let questionId = this.props.question ? this.props.question.id : null;
    let title = this.props.question ? this.props.question.title : '';
    let body = this.props.question ? this.props.question.body : '';
    this.state={
      id: questionId,
      authorId: this.props.authorId,
      title: title,
      body: body
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToShow = this.navigateToShow.bind(this);
  }

  navigateToShow() {
    this.props.history.push(`/questions/${this.state.id}`);
  }

  update(property){
    return e => this.setState({
      [property]: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('question[authorId]', this.state.authorId);
    formData.append('question[title]', this.state.title);
    formData.append('question[body]', this.state.body);
    this.props.questionAction(formData);
    this.navigateToShow();
  }


  render(){
    const { title, body } = this.state;

    let buttontext;
    let first_half;

    if (this.props.formType === 'new') {
      first_half = "Ask a question";
      buttontext = "Post Your";
    } else if (this.props.formType === 'edit') {
      buttontext = "Edit";
      first_half = "Edit A Question";
    }

    return(
      <div className="new-question-container">
        <div className="content">
          <h1 className="question-top-title">{first_half}</h1>
          <br/>
        </div>
        <div className="question-body">
          <form onSubmit={this.handleSubmit}>
            <div className="question-title">
              <label className="title-label">
                Title
                <br />
                <input
                  type="text"
                  value={title}
                  onChange={this.update('title')}
                  className="title-input-field"
                  />
              </label>
            </div>

            <br />

            <label className="body-label">
              Body
              <br />
              <div className="question-text-input-area">
                <textarea
                  value={body}
                  onChange={this.update('body')}
                  className="body-input-field"
                  />
              </div>
            </label>
            <br />
            <input type="submit" value={`${buttontext} Question`}
              className="new-question-button" />
          </form>
          </div>
      </div>
    );
  }
}
export default withRouter(QuestionForm);
