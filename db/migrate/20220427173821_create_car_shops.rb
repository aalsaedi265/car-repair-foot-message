class CreateCarShops < ActiveRecord::Migration[7.0]
  def change
    create_table :car_shops do |t|
      # t.integer :id
      t.float :price
      t.string :server
      t.timestamps
    end
  end
end
