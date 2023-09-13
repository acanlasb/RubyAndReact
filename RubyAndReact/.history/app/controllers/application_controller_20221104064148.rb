class ApplicationController < ActionController::API
include ActionController::Cookies
private
def current_user
User.find_by
end
end
