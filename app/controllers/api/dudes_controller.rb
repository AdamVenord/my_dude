class Api::DudesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_dude(current_user.liked_dudes)
  end

  def update
    current_user.liked_dudes << params[:id].to_i
    current_user.save
  end

  def my_dudes
    render json: User.liked(current_user.liked_dudes)
  end

  def destroy
  end

end
