# frozen_string_literal: true
class User < ActiveRecord::Base
  serialize :liked_games, Array
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.random_cats(id)
    @id = id.empty? ?[0] : @id
    Cat.where("ud not in (?)", @id. order("Random("))
  end

  def self.liked(id)
    @id = id.empty? ? [0] : @id
    Cat
end
