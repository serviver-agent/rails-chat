# frozen_string_literal: true

require "./modules/room.rb"
require "./modules/rooms_users.rb"

class RoomCurdUsecase
  def create(name, user_id)
    room = Room.create()
  end

  def updateRoom(room_id, name)
    room = Room.find_by(id: room_id)
    room.update(name: name)
  end

  def updateUser(room_id, users)
    now_users = RoomsUsers.where(room: room_id)

    now_user_list = now_users.to_a
    new_user_list = users.to_a

    delete_user_set = now_user_list - new_user_list
    insert_user_set = new_user_list - now_user_list

    delete_user_set.each { |delete_user_id|
      RoomUsers.where(room_id: room_id, user_id: delete_user_id).delete
    RoomUsers

    insert_user_set.each { |insert_user_id|
      new_rooms_users_models << RoomsUsers.new(room_id, insert_user_id)
    }
    RoomsUsers.import new_rooms_users_models
  end

  def list
    rooms = Room.all
    rooms
  end

  def delete(room_id)
    room = Room.find_by(id: room_id)
    room.delete
  end
end
