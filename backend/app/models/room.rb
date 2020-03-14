# frozen_string_literal: true

require "./app/models/application_record.rb"

class Room < ApplicationRecord
  has_many :rooms_users
  has_many :users, through: :rooms_users
end
