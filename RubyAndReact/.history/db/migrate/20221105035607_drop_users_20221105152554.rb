class DropUsers < ActiveRecord::Migration[7.0]
  def change
drop_table(:users, if_exists: true)
remove_foreign_key :games, :branches

  end
end
