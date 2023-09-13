class GameSerializer < ActiveModel::Serializer
  attributes:name, :release_date, :platforms, :genre
end
