class UserWithMassageSerializer < ActiveModel::Serializer
  attributes :id, :full_name
  has_many :massages
end
