# == Schema Information
#
# Table name: questions
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  validates :title, :body, length: { minimum: 1 }

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  has_many :answers,
    foreign_key: :question_id,
    class_name: :Answer

  def answer_count
    Answer.where('question_id = ?', self.id).count(:id)
  end

end
