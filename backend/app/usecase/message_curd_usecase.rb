# frozen_string_literal: true

require "./modules/message.rb"

class MessageCurdUsecase
  def create(room_id, user_id, message)
    message = Message.create(room: room_id, user: user_id, message: message)
  end

  def update(message_id, message)
    message = Message.find_by(id: message_id)
    message.update(message: message)
  end

  def list
    message = Message.all
    message
  end

  def delete
    message = Message.find_by(id: message_id)
    message.delete
  end
end
