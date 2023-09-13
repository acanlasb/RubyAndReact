class RemoveGamesFromUsers < ActiveRecord::Migration[7.0]
  def change
    if foreign_key_exists?(:games, :games)
      remove_foreign_key :users, :games
    end
  end
end
