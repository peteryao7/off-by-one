import React from 'react';
import IndexItem from './question_index_item';
import { questionsArray } from '../../reducers/selectors';

const QuestionIndex = ({ questions }) => (
  <div className="min-hght-400">
    {questionsArray(questions).map(question => (
      <IndexItem question={question} key={question.id} />
    ))}
    {questions.length === 0 ? (
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
);
export default QuestionIndex;
