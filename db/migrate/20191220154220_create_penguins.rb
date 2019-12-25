class CreatePenguins < ActiveRecord::Migration[5.2]
  def change
    create_table :penguins do |t|
      t.string :species
      t.string :description
      t.string :link
      
      t.timestamps
    end
  end
end
