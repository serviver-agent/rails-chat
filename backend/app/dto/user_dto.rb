# frozen_string_literal: true

class UserDto < Serviveragent::Serviveragent::Railschat::Com::Protobuf::Proto::User
  def initialize(user_id, user_name)
    @user_id = user_id
    @user_name = user_name
  end
end
