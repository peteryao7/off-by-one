# == Schema Information
#
# Table name: answers
#
#  id          :bigint(8)        not null, primary key
#  author_id   :integer          not null
#  question_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  validates :author_id, :question_id, :body, presence: true
  validates :body, length: { minimum: 1 }

  belongs_to :user,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :question,
  foreign_key: :question_id,
  class_name: :Question

  def self.in_bounds(bounds)
    author_id = bounds[:author_id]
    question_id = bounds[:question_id]
    if user_id
      self.where("author_id = ?", author_id)
    elsif question_id
      self.where("question_id = ?", question_id)
    else
      "incomplete arguments error in Answer request"
    end
  end
end
