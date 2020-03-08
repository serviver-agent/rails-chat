# frozen_string_literal: true

require "grpc"
require "/.lib/router_services_pb.rb"


class ServerImpl < Serviveragent::Serviveragent::Railschat::Com::Protobuf::Proto::RoomService::Service
  # これはRoomServiceのControllerしか定義していない
  # 実際は RoomService, UserService, MessageServieを作りその中で実装
  # そのクラスをServerImplでインスタンス化するべき
  def create_room(create_room_request, _call)
    room_id = 1
    CreateRoomResponse.new(room_id)
  end

  def update_room(update_room_request, _call)
    UpdateRoomResponse
  end

  def update_room_user(update_room_user_request, _call)
    UpdateRoomUserResponse
  end

  def list_room(list_room_request, _call)
    ListRoomResponse
  end

  def delete_room(delete_room_request, _call)
    DeleteRoomResponse
  end
end
