export const fetchQuestions = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/questions',
    data
  })
);

// may need to fetch all questions differently
// depending on how many questions should show on the page

export const fetchQuestion = questionId => (
  $.ajax({
    method: 'GET',
    url: `api/questions/${questionId}`
  })
);

export const createQuestion = question => (
  $.ajax({
    method: 'POST',
    url: 'api/questions',
    data: { question }
  })
);

export const updateQuestion = question => (
  $.ajax({
    method: 'PATCH',
    url: `api/questions/${question.id}`,
    data: { question }
  })
);

export const deleteQuestion = questionId => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${questionId}`
  })
);
