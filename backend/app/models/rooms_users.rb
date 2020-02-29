# frozen_string_literal: true

class RoomsUsers < ApplicationRecord
  belongs_to :user
  belongs_to :room
end
