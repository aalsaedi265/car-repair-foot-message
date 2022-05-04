class CreateCarShops < ActiveRecord::Migration[7.0]
  def change
    create_table :car_shops do |t|
      # t.integer :id
      t.belongs_to :user
      t.float :price
      t.string :name
      t.timestamps
    end
  end
end
