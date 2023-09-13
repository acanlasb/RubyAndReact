class User < ApplicationRecord
  has_secure_password
  has_many :games
  validates :password, presence: true,
  validates :email, presence: true
  validates :email, uniqueness: true
  validates :email, format: /
end
