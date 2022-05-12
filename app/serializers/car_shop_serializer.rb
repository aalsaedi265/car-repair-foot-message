class CarShopSerializer < ActiveModel::Serializer
  attributes :id, :price, :name, :user_id
end
