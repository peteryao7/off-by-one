json.total @total_questions_in_bounds
json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.partial! 'question', question: question
    end
  end
end
