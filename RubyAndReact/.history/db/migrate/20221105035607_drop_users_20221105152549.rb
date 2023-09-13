class DropUsers < ActiveRecord::Migration[7.0]
  def change
drop_table(:users, if_exists: true)
remove_foreign_key :accounts, :branches

  end
end
