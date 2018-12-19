json.extract! question, :id, :title, :body, :author_id, :created_at, :updated_at
json.authorName question.user.username
