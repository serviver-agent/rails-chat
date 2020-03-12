# frozen_string_literal: true

require "./app/models/application_record.rb"

class RoomsUsers < ApplicationRecord
  belongs_to :user
  belongs_to :room
end
