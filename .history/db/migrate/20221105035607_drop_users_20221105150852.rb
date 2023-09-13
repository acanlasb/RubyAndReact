class DropUsers < ActiveRecord::Migration[7.0]
  def change
    DROP Table IF EXISTS  users
  end
end
