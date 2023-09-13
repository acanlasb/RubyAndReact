class ApplicationController < ActionController::API
include ActionController::Cookies
rescue_from Act
private
def current_user
User.find_by(username:"Ange")
end
def record_not_found(errors)
render json: errors.message, status: :not_found
end
def invalid_record(invalid)
render json: invalid.record.errors, status: :unprocessable_entity
end
end
