# frozen_string_literal: true

require "grpc"
require "./app/service/message_service.rb"
require "./app/service/room_service.rb"
require "./app/service/user_service.rb"

class Server
  # def main
    port = "0.0.0.0:3000"
    server = GRPC::RpcServer.new
    server.add_http2_port(port, :this_port_is_insecure)
    GRPC.logger.info("... running insecurely on #{port}")
    server.handle(MessageService.new())
    server.handle(RoomService.new())
    server.handle(UserService.new())
    server.run_till_terminated
  # end

  # main
end
