class AddTrackableToUsers < ActiveRecord::Migration[7.0]
  def change
    add_colum :users, :sign_in:count, :integer, :default => 0
    add_colum :users
  end
end
