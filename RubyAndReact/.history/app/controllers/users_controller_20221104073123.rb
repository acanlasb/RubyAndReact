class UsersController < ApplicationController
  def index
    users = User.all
    render json :
  end
  def show
  end
  def create
  end
end
