class Game < ApplicationRecord
  validates :name, presence: true
  validates :release_date, presence: true
  validates :platforms, presence: true
  validates :genre, presence: true
  validates :name, uniqueness: true
  validates :release_date, uniqueness: true
  validates :platforms, uniqueness: true
  validates :genre, uniqueness: true
  belongs_to :user
  scope :by_user, lambda {|user|
where(:user_id => user.id)}
end
