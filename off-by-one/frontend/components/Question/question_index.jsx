import React from 'react';
import IndexItem from './question_index_item';
import { questionsArray } from '../../reducers/selectors';
import { Link } from 'react-router-dom';
import RightSidebar from '../RightSidebar/right_sidebar';

// componentDidMount()

class QuestionIndex extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchQuestions();
      console.log("hey index should scroll");
      window.scrollTo(0,0);
    }

    render() {
      return (
        <div className="all-questions-list">

        <div className="questions-and-right-sidebar">
        <div className="question-header-and-questions">

          <div className="question-header-top-button">
            <h1>Top Questions</h1>
            <Link to="/questions/ask" className="link-button-splash">Ask Question</Link>
          </div>

        <div className="questions-list">
          {this.props.questions.map(question => (
            <IndexItem question={question} key={question.id} author={question.authorName}/>
          ))}

          {this.props.questions.length === 0 ? (
        <div className="basic-info-text">
          Your search returned no matches. <br />
          <br />
          Suggestions: <br />
          <br />
          <ul>
            <li>Try fewer keywords.</li>
            <li>Try different keywords.</li>
            <li>Try more general keywords.</li>
          </ul>
        </div>

      ) : (
        <></>
      )}
    </div>
    </div>
    <RightSidebar />
    </div>
    </div>
  );
}

}
export default QuestionIndex;
