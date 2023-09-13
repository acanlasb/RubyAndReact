# frozen_string_literal: true
class User < ActiveRecord::Base
  #can be treated like an array in this db but bad practice.
  serialize :liked_games, Array
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  def self.unliked_games(ids)
    ids = ids.empty? ?[0] : ids
    Game.where("id Not in (?)", ids).order("Random()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Game.where("id In (?", ids)
  end

  def s
end
