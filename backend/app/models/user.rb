# frozen_string_literal: true

require "./app/models/application_record.rb"

class User < ApplicationRecord
  has_many :rooms_users
  has_many :rooms, through: :rooms_users
end
