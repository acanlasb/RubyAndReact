class DropUsers < ActiveRecord::Migration[7.0]
  def change
    DROP TABLE if exists users cascade
  end
end

