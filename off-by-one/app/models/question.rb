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
  # has_many :votes

  def self.in_bounds(bounds)
    user_id = bounds[:user_id]
    lim = bounds[:limit] || 25
    text = bounds[:text] || ''
    offs = bounds[:offset] || 0

    if text
      Question.where("title LIKE ?", "%#{text}%").limit(lim).offset(offs).order(updated_at: :desc)
    elsif user_id
      Question.where("user_id == ?", user_id).limit(lim).offset(offs).order(:updated_at)
    else
      Question.all.order.limit(lim).offset(offs).(created_at: :desc)
    end
  end

  def self.total_in_bounds(bounds)
    user_id = bounds[:user_id]
    text = bounds[:text] || ''

    if text
      Question.where("title LIKE ?", "%#{text}%").count(:id)
    elsif user_id
      Question.where("user_id == ?", user_id).count(:id)
    else
      Question.all.order.limit(lim).count(:id)
    end
  end

end
