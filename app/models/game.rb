class Game < ApplicationRecord
  has_many :cards
  has_many :penguins, through: :cards
end
