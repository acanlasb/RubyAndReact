class User < ApplicationRecord
  has_secure_password
  validates_presence_of :email
  validates :email, uniqueness: true
      # has_many :games
end
