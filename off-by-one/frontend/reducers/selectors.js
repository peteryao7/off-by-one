export const selectQuestion = ({questions}, questionId) => {
  return questions[questionId] || { questionId: ["none found"] }
}

export const questionsArray = (questions) => (
  Object.values(questions)
);

export const answersArray = ({ answers }) => (
  Object.values(answers)
);
