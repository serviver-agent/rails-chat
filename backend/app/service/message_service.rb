# frozen_string_literal: true

require "./lib/router_services_pb.rb"
require "./usecase/message_curd_usecase.rb"
require "./dto/message_dto.rb"

class MessageService <
  Serviveragent::Serviveragent::Railschat::Com::Protobuf::Proto::MessageService::Service
  def initialize
    @message_usecase = MessageCurdUseCase.new()
  end

  def create(create_message_request, _call)
    user_id = create_message_request.user_id
    room_id = create_message_request.room_id
    message = create_message_request.message
    @message_usecase.create(room_id, user_id, message)

    CreateMessageResponse.new()
  end

  def update(update_message_request, _call)
    # バリデーションは後で追加
    # user_id = create_message_request.user_id
    message_id = create_message_request.message_id
    message = create_message_request.message
    @message_usecase.update(message_id, message)

    UpdateMessageResponse.new()
  end

  def list(list_message_request, _call)
    message_list = @message_usecase.list
    messages = message_list.map { |message|
      Message.new(message.id, message.user_id, message.message)
    }

    ListMessageResponse.new(messages)
  end

  def delete(delete_message_request, _call)
    # バリデーションは後で追加
    # user_id = delete_message_request.user_id
    message_id = delete_message_request.message_id
    @message_usecase.delete(message_id)

    DeleteMessageResponse.new()
  end
end
