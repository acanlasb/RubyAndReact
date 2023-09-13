class UsersController < ApplicationController
#shows all user's list using postman or through web in json format
  def index
    users = User.all
    render json: users
  end
#shows specific user by iterating through the params id. shows the user if the user is logged in
#checks if user is logged in
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
#creates users
def create
  user = User.create(user_params)
  if user.valid?
    session[:user_id] = user.id
    cookies[:user_id] = user.id
      render json: user, status: :created
  else
    render json: user.errors.full_messages, status: :unprocessable_entity
  end
end
#deletes users. can be easily done using postman
def destroy
  user = User.find_by(id: params[:id])
  if user
    user.destroy
    render json: "deleted", status: :ok
    head :no_content
  else
    render json: "user does no exist", status: :not_found
  end
end

private
#private for protection
def user_params
  params.permit(:email, :password, :password_confirmation)
end

end
