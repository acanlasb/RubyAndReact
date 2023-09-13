class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :release_date
      t.string :platforms
      t.string :genres

      t.timestamps
    end
  end
end
