class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(params[:email])
    if @user && user.authenticate(params[:password])
      render json: @user, status: :ok
    else
      render json: "Invalid email or password", status: :
  end

  def destroy
  end
end
