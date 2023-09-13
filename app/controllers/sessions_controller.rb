class SessionsController < ApplicationController
  #login
  def create
    @user = User.find_by(params[:id])
    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id
      cookies[:user_id] = @user.id
      render json: {session: @user, cookies: cookies.to_hash}
    else
      render json: "invalid credentials. try again", status: :unauthorized
    end
  end
#logout
  def destroy
    session.delete :user_id
    render json: "logged out", status: :success
  end

end
