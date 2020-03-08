class messageDto < Serviveragent::Serviveragent::Railschat::Com::Protobuf::Proto::Message
    def initialize(message_id, user_id, message)
      @message_id = message_id
      @user_id = user_id
      @message = message
    end
end
