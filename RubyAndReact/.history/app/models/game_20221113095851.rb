class Game < ApplicationRecord
  validates :name, presence: true
  validates :release_date, presence: true
  validates :platforms, presence: true
  validates :genres, presence: true
  validates :name, uniqueness: true
  validates :release_date, uniqueness: true
  validates :platforms, uniqueness: true
  validates :genres, uniqueness: true
end

w
