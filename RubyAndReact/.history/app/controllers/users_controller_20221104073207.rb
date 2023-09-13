class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, each_serializer: UserSerializer
  end
  def show
    @users
  end
  def create
  end
end
