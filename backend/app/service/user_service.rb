# frozen_string_literal: true

require "router_services_pb"
require "./app/usecase/user_curd_usecase.rb"
require "./app/dto/user_dto.rb"

class UserService < Serviveragent::Railschat::Com::Protobuf::Proto::UserService::Service
  def initialize
    @user_usecase = UserCurdUsecase.new()
  end

  def update(update_user_request, _call)
    user_id = update_user_request.user.user_id
    user_name = update_user_request.user.user_name
    @user_usecase.update(user_id, user_name)

    UpdateUserResponse.new()
  end

  def list(list_user_request, _call)
    user_list = @user_usecase.list
    uesrs = user_list.map { |user|
      User.new(user.id, user.user_name)
    }

    ListUserResponse.new(uesrs)
  end

  def delete(delete_user_request, _call)
    user_id = delete_user_request.user_id
    @user_usecase.delete(user_id)

    DeleteUserResponse.new()
  end
end
