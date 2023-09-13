class User < ApplicationRecord
  has_secure_password
  has_many :games
  validates :password, presence: true,
  valida
end
