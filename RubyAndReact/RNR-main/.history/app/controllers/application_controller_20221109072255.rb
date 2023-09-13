class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
include DeviseTokenAuth::Concerns::SetUserByToken
before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email])
  end
# include ActionController::Cookies
# before_action :authenticate_user!
# private
# def current_user
# User.find_by(id: session[:@user_id])
# end
# def record_not_found(errors)
# render json: errors.message, status: :not_found
# end
# def invalid_record(invalid)
# render json: invalid.record.errors, status: :unprocessable_entity
# end
end
