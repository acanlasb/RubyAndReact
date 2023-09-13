class User < ApplicationRecord
            # Include default devise modules.
            devise :database_authenticatable, :registerable,
:recoverable, :rememberable, :trackable, :validatable,
:confirmable, :omniauthable
include DeviseTokenAuth::Concerns::User
  has_secure_password
  has_many :games
  validates :password, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :email, format: /\A[^@\s]+@[^@\s]+\z/
end
