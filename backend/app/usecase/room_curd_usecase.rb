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
    # 現在roomに所属してるusersを取得する
    users = RoomsUsers.where(room: room_id)
  # 現在roomに所属しているusersと指定されたusersの差分をcreate, deleteする
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
