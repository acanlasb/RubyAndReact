class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(params[:email])
    if @user && user.authenticate(params[:pa])
  end

  def destroy
  end
end
