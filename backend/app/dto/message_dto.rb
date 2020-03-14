# frozen_string_literal: true

require "router_pb"
require "router_services_pb"

class MessageDto <Serviveragent::Railschat::Com::Protobuf::Proto::Message
  def initialize(message_id, user_id, message)
    @message_id = message_id
    @user_id = user_id
    @message = message
  end
end
