class DropUsers < ActiveRecord::Migration[7.0]
  def change
drop_table(:campaigns, if_exists: true)  end
end
