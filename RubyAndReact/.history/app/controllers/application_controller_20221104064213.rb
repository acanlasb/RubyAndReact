class ApplicationController < ActionController::API
include ActionController::Cookies
private
def current_user
User.find_by(username:"Ange")
end
def record_not_found(errors)
end
