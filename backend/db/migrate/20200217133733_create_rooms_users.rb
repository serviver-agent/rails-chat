# frozen_string_literal: true

class CreateRoomsUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms_users do |t|
      t.references :user, index: true, foreign_key: true
      t.references :room, index: true, foreign_key: true
      t.timestamps
    end
  end
end
