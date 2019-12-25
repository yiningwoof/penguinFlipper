class Penguin < ApplicationRecord
  has_many :cards
  has_many :games, through: :cards
  has_many_attached :pictures
end
