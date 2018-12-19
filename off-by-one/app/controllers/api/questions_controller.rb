class Api::QuestionsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def index
    @questions = Question.all;
    render :index
  end

  def show
    @question = Question.find(params[:id])
    render :show
  end

  def create
    @question = current_user.questions.new(question_params)
    if @question.save
      render :show
    else
      render json: @question, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    # update_attributes = return false if saving passed-in hash fails
    if @question && @question.update_attributes(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    if @question
      @question.destroy
      render :show
    else
      render json: "You can only delete your own questions", status: 422
    end
  end

  private

  def question_params
    params.require(:question).permit(:author_id, :title, :body)
  end
  # 
  # def bounds
  #   params[:bounds]
  # end

end
