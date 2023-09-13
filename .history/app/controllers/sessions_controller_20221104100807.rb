class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(params[:email])
    if @user &.authenticate(params[:password])
      render json: @user, status: :ok
    else
      render json: "Invalid email or password", status: :unauthorized
    end
  end

  def destroy
  end
end
