# frozen_string_literal: true

require "./app/models/application_record.rb"

class Message < ApplicationRecord
  belongs_to :room
  belongs_to :user
end
