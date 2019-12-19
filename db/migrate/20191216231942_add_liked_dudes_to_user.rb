class AddLikedDudesToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_dudes, :text
  end
end
