export const fetchQuestions = () => (
  $.ajax({
    method: 'GET',
    url: 'api/questions'
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

export const createQuestion = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/questions',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateQuestion = formData => {
  return ($.ajax({
    method: 'PATCH',
    url: `api/questions/${formData.get("question[id]")}`,
    data: formData,
    contentType: false,
    processData: false
  }))
};

export const deleteQuestion = questionId => (
  $.ajax({
    method: 'DELETE',
    url: `api/questions/${questionId}`
  })
);
