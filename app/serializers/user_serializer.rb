class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :password_digest


end