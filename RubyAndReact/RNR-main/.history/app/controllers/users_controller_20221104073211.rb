class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, each_serializer: UserSerializer
  end
  def show
    @user = User
  end
  def create
  end
end
