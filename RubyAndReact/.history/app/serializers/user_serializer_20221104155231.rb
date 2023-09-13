class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :password_
end
