class MassageSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :price, :request
end
