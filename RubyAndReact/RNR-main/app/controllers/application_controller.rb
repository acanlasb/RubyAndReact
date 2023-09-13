class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def current_user
  User.find_by(id: session[:user_id])
  end

  def record_not_found(errors)
  render json: errors.message, status: :not_found
  end

  def invalid_record(invalid)
  render json: invalid.record.errors, status: :unproccessable_entity
  end
end
