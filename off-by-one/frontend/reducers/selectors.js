// retrieve question to show in QuestionShow
export const selectQuestion = ({questions}, questionId) => {
  return questions[questionId] || { questionId: ["none found"] }
}
