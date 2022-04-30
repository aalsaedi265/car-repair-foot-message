class UserWithCarShopSerializer < ActiveModel::Serializer

  has_many :car_shops
end
