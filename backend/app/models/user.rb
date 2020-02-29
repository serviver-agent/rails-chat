class User < ApplicationRecord
  has_many :rooms_users
  has_many :rooms, through: :rooms_users
end