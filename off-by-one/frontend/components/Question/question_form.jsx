import React from 'react';
import {withRouter} from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    // must do these ternary checks to autofill values if formType=edit
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

  componentDidMount() {
    window.scrollTo(0,0);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.errors !== this.props.errors)
    while (this.props.errors.length > 0) {this.props.errors.pop();}
  }

  update(property){
    return e => this.setState({
      [property]: e.target.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('question[id]', this.state.id);
    formData.append('question[authorId]', this.state.authorId);
    formData.append('question[title]', this.state.title);
    formData.append('question[body]', this.state.body);
    this.props.questionAction(formData).then(
      res => {
        this.props.history.push(`/questions/${res.question.id}`)
      }
    );
  }

  editHeaderMessage(){
    if(this.props.formType === 'Edit') return (<h1 className="edit-header-message">Your edit will be placed in a queue until it is peer reviewed.
      <br/><br/>
      We welcome all constructive edits, but please make them substantial. Avoid trivial edits unless absolutely necessary.</h1>);
    else return (<div></div>);
  }

  renderErrors() {
    // debugger
    if (this.props.formType === 'new') {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else return (<div></div>)
  }


  render(){
    const { title, body } = this.state;

    let buttontext;
    let first_half;

    if (this.props.formType === 'new') {
      first_half = "Ask A Question";
      buttontext = "Post Your";
    } else if (this.props.formType === 'Edit') {
      buttontext = "Edit";
    }


    return(
      <div className="new-question-container">
        <div className="content">
          <h1 className="question-top-title">{first_half}</h1>
            <div>{this.editHeaderMessage()}</div>
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
          <div className="question-errors">
            {this.renderErrors()}
          </div>
      </div>
    );
  }
}
export default withRouter(QuestionForm);
