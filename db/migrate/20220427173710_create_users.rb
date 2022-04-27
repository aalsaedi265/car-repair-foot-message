class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      # t.integer :user_id
      t.string :full_name
      t.integer :password_digest
      t.belongs_to :massage
      t.belongs_to :car_shop
      t.timestamps
    end
  end
end
