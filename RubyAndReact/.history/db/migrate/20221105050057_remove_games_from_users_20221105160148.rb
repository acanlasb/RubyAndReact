class RemoveGamesFromUsers < ActiveRecord::Migration[7.0]
  def change
    if foreign_key_exists?(:users, :semesters)
      remove_foreign_key :users, :semesters
  end
end
