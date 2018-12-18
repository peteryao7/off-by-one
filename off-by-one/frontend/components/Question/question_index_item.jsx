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
    const { title, body, user, updated_at } = this.props.question;
    return (
        <div className="question-index-item" onClick={this.handleClick}>
          <div className="index-item-title">{title || "No title!"}</div>
          <div className="index-item-footer">
            <div className="index-footer-text">
              by {user ? user.username : "anon"}
            </div>
          </div>
        </div>)
  }
}
export default withRouter(IndexItem);

// <div className="index-footer-text">
//   modified {timeSinceUpdate(updated_at)} hr:min:secs ago
// </div>
