class CreateMassages < ActiveRecord::Migration[7.0]
  def change
    create_table :massages do |t|
      # t.integer :id
      t.string :pressure
      t.string :oil
      t.string :request
      t.float :price
      t.timestamps
    end
  end
end
