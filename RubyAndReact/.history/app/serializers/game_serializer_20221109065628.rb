class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :platforms, :genres
end
