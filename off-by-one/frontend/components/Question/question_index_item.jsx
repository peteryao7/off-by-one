import React from 'react';
import {withRouter} from 'react-router-dom';
// import {timeSinceUpdate} from '../../reducers/selectors';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const questionId = this.props.question.id;
    this.props.history.push(`/questions/${questionId}/`);
  }

  render() {
    const { title, created_at } = this.props.question;
    return (
        <div className="question-index-item" onClick={this.handleClick}>

        <div className="question-answer-count">
        <div className="question-answer-num">
        {this.props.question.answer_count}
        </div>
        <div className="question-answer-text">
        answers
        </div>
        </div>

        <div className="index-item-right">

          <div className="index-item-title">{title || "No title!"}</div>
          <div className="index-item-footer">
              asked on { created_at.slice(0,10) } by { this.props.author ? this.props.author : "anon"}
          </div>
        </div>
        </div>)
  }
}
export default withRouter(IndexItem);
