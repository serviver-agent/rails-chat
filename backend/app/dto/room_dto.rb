# frozen_string_literal: true

require "router_pb"

class RoomDto < Serviveragent::Railschat::Com::Protobuf::Proto::Room
  def initialize(room_id, user_id, room_name)
    @room_id = room_id
    @user_id = user_id
    @room_name = room_name
  end
end
