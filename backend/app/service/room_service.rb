# frozen_string_literal: true

require "./lib/router_services_pb.rb"
require "./usecase/room_curd_usecase.rb"
require ".dto/room_dto.rb"

class  RoomService < Serviveragent::Serviveragent::Railschat::Com::Protobuf::Proto::RoomService::Service
  def initialize
    # クラスインスタンスで注入できるようにする？
    @room_usecase = RoomCurdUseCase.new()
  end



  def create_room(create_room_request, _call)
    CreateRoomResponse.new(@room_usecase.create(create_room_request.name, create_room_request.user_id))
  end

  def update_room(update_room_request, _call)
    room_id = update_room_request.room.room_id
    room_name = update_room_request.room.room_name
    updated_room_id = @room_usecase.updateRoom(room_id, room_name)

    UpdateRoomResponse.new(updated_room_id)
  end

  def update_room_user(update_room_user_request, _call)
    room_id = update_room_request.room_id
    user_ids = update_room_request.user_ids
    @room_usecase.updateUser(room_id, user_ids)

    UpdateRoomUserResponse.new()
  end

  def list_room(list_room_request, _call)
    room_list = @room_usecase.list
    rooms = room_list.map { |room|
      Room.new(room.id, room.user_id, room.room_name)
    }

    ListRoomResponse.new(rooms)
  end

  def delete_room(delete_room_request, _call)
    room_id =  delete_room_request.room_id
    @room_usecase = delete(room_id)

    DeleteRoomResponse.new()
  end
end
