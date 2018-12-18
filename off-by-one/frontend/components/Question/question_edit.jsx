import React from 'react';
import {Link} from 'react-router-dom';

import { ProtectedRoute} from '../../util/route_util';
import EditQuestionFormContainer from './edit_question_form_container';


class QuestionEdit extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.question || this.props.fetchQuestion(this.props.questionId);
  }
  componentWillReceiveProps(){
    this.props.question || this.props.fetchQuestion(this.props.questionId);
  }
  render() {
    return(
        <EditQuestionFormContainer question={this.props.question}/>
    );
  }
}

export default QuestionEdit;
