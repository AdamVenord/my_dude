class CreateDudes < ActiveRecord::Migration[6.0]
  def change
    create_table :dudes do |t|
      t.string :name
      t.string :race
      t.string :registry
      t.string :avatar

      t.timestamps
    end
  end
end
