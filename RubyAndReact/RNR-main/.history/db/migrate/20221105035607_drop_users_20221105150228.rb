class DropUsers < ActiveRecord::Migration[7.0]
  def change
    DROP TABLE if exists users cascade
  end
end

 DROP ... CASCADE to drop the dependent objects t
