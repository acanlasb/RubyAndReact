class SessionsController < ApplicationController
  def create
    @user = User.find
  end

  def destroy
  end
end
