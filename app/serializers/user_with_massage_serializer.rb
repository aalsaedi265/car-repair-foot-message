class UserWithMassageSerializer < ActiveModel::Serializer

  has_many :massages
end
