class SessionsController < ApplicationController
  def create
    @user = User.find_by_email()
  end

  def destroy
  end
end
