class RemoveGamesFromUsers < ActiveRecord::Migration[7.0]
  def change
    if foreign_key_exists?(:games, :users)
      remove_foreign_key :games, :users
    end
  end
end
