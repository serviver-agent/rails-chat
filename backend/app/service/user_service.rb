# frozen_string_literal: true

require "./lib/router_services_pb.rb"
require "./usecase/user_curd_usecase.rb"

class UserService <
    Serviveragent::Serviveragent::Railschat::Com::Protobuf::Proto::UserService::Service
    user_usecase = UserCurdUseCase.new()

    def update(update_user_request, _call)
        user_id = update_user_request.user.user_id
        user_name = update_user_request.user.user_name
        user_usecase.update(user_id, user_name)
        UpdateUserResponse.new()
    end

    def list(list_user_request, _call)
        ListUserResponse.new()
    end

    def delete(delete_user_request, _call)
        DeleteUserResponse.new()
    end


end
