import React from 'react';
import AnswerIndexItem from './answer_index_item';

const AnswerIndex = ({ answers }) => (
  <div>
    <div className="header-section">
      <div className="answer-index-header-total">
        <h1>{answers.length} Answer{answers.length === 0 || answers.length > 1 ? 's' : ''}</h1>
      </div>
    </div>

    <div className="answer-index">
    {answers.map(answer => (
      <AnswerIndexItem
        answer={answer}
        key={answer.id}
        />
    ))}
    </div>
  </div>
);
export default AnswerIndex;
