class UsersController < ApplicationController
  def index
    users = User.all
    render json: @u
  end
  def show
  end
  def create
  end
end
