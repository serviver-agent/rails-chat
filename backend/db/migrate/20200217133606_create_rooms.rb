# frozen_string_literal: true

class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.string :name, null: false, unique: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
