class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, each_seria
  end
  def show
  end
  def create
  end
end
