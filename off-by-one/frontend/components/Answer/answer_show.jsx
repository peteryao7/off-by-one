import React from 'react';
import { Link } from 'react-router-dom';

import { ProtectedRoute } from '../../util/route_util';
import EditAnswerFormContainer from './edit_answer_form_container';

class AnswerShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      deleteButtonErrors: [],
      editButtonErrors: [],
      renderEdit: false
    }
    this.removeAnswer = this.removeAnswer.bind(this);
    this.editAnswer = this.editAnswer.bind(this);
    this.resetRenderEditState = this.resetRenderEditState.bind(this);
  }
  componentDidMount(){
    this.props.fetchAnswer(this.props.answerId);
  }

  removeAnswer(e){
    e.preventDefault();
    if(this.props.user && this.props.answer.user_id === this.props.user.id)
    {
      this.props.deleteAnswer(this.props.answerId);
    } else {
      this.setState({ ['deleteButtonErrors']: ['cannot delete other users\' answers' ]});
      // window.setTimeout(() => this.setState({['deleteButtonErrors']: []}), 4000);
    }
  }

  editAnswer(e){
    e.preventDefault();
    if(this.props.user){
      this.setState({['renderEdit']: true});
    } else {
      this.setState({ ['editButtonErrors']: ['must be logged in to edit answers' ]});
      // window.setTimeout(() => this.setState({['editButtonErrors']: []}), 4000);
    }
  }
  resetRenderEditState(){
    this.setState({['renderEdit']: false})
  }
  render() {
    const editForm = this.state.renderEdit ?
    <EditAnswerFormContainer
      user={this.props.user}
      answer={this.props.answer}
      resetRenderEditState={this.resetRenderEditState}
      /> : <div></div>

    const deleteButton =
      this.props.user && this.props.user.id === this.props.answer.user_id ?
      (<button onClick={(e)=>this.removeAnswer(e)} className="footer-button">
        delete
      </button>) : null;

    return (<div>
        <div className="float-display">
          <div className="question-body">
            {editForm}
            {this.props.answer.body}

            <br />
            <br />
            <div className="question-body-footer">
              <div className="right-error-group">
                {this.state.editButtonErrors.map(e => `${e} `)}
              </div>
              <button onClick={e => this.editAnswer(e)} className="footer-button">
                improve this answer
              </button>
              <div className="one-em-padding" />
              <div className="error-group">
                {this.state.deleteButtonErrors.map(e => `${e} `)}
              </div>
              {deleteButton}
              <div className="one-em-padding" />
              on {this.props.answer.created_at}
              <div className="one-em-padding" />
              by {this.props.answer.user ? this.props.answer.user.username : "__"}
            </div>
          </div>
        </div>
      </div>)
  }
}

export default AnswerShow;
