class DropUsers < ActiveRecord::Migration[7.0]
  def change
    DROP TABLE users
  end
end
