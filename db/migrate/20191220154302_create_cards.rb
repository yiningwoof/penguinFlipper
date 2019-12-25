class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.references :game, foreign_key: true
      t.references :penguin, foreign_key: true

      t.timestamps
    end
  end
end
