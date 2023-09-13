class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :platforms, :genres, :created_at, :updated_at
end
