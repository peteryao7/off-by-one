export const fetchAnswers = params => (
  $.ajax({
    method: 'GET',
    url: 'api/answers',
    data: { bounds: params }
  })
);

export const fetchAnswer = id => (
  $.ajax({
    method: 'GET',
    url: `api/answers/${id}`
  })
);

export const createAnswer = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/answers',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const updateAnswer = answer => (
  $.ajax({
    url: `api/answers/${answer.id}`,
    method: 'PATCH',
    data: {answer}
  })
);

export const deleteAnswer = answerId => (
  $.ajax({
    url: `api/answers/${answerId}`,
    method: 'DELETE'
  })
);
