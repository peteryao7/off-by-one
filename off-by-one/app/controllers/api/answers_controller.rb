# == Schema Information
#
# Table name: answers
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  answer_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Api::AnswersController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @answers = bounds ? Answer.in_bounds(bounds) : "error - no answers or incorrect request"
    render :index
  end

  def create
    @answer = current_user.answers.new(answer_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer && @answer.update_attributes(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = current_user.answers.find(params[:id])
    if @answer
      @answer.destroy
      render :show
    else
      render json: "Can only delete your own answers", status: 422
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:author_id, :body, :question_id)
  end

  def bounds
    params[:bounds]
  end

end
