// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var router_pb = require('./router_pb.js');

function serialize_serviveragent_railschat_com_protobuf_proto_CreateMessageRequest(arg) {
  if (!(arg instanceof router_pb.CreateMessageRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.CreateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_CreateMessageRequest(buffer_arg) {
  return router_pb.CreateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_CreateMessageResponse(arg) {
  if (!(arg instanceof router_pb.CreateMessageResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.CreateMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_CreateMessageResponse(buffer_arg) {
  return router_pb.CreateMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_CreateRoomRequest(arg) {
  if (!(arg instanceof router_pb.CreateRoomRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.CreateRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_CreateRoomRequest(buffer_arg) {
  return router_pb.CreateRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_CreateRoomResponse(arg) {
  if (!(arg instanceof router_pb.CreateRoomResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.CreateRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_CreateRoomResponse(buffer_arg) {
  return router_pb.CreateRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageRequest(arg) {
  if (!(arg instanceof router_pb.DeleteMessageRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.DeleteMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageRequest(buffer_arg) {
  return router_pb.DeleteMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageResponse(arg) {
  if (!(arg instanceof router_pb.DeleteMessageResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.DeleteMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageResponse(buffer_arg) {
  return router_pb.DeleteMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomRequest(arg) {
  if (!(arg instanceof router_pb.DeleteRoomRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.DeleteRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomRequest(buffer_arg) {
  return router_pb.DeleteRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomResponse(arg) {
  if (!(arg instanceof router_pb.DeleteRoomResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.DeleteRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomResponse(buffer_arg) {
  return router_pb.DeleteRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_DeleteUserRequest(arg) {
  if (!(arg instanceof router_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_DeleteUserRequest(buffer_arg) {
  return router_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_DeleteUserResponse(arg) {
  if (!(arg instanceof router_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_DeleteUserResponse(buffer_arg) {
  return router_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_ListMessageRequest(arg) {
  if (!(arg instanceof router_pb.ListMessageRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.ListMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_ListMessageRequest(buffer_arg) {
  return router_pb.ListMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_ListMessageResponse(arg) {
  if (!(arg instanceof router_pb.ListMessageResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.ListMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_ListMessageResponse(buffer_arg) {
  return router_pb.ListMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_ListRoomRequest(arg) {
  if (!(arg instanceof router_pb.ListRoomRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.ListRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_ListRoomRequest(buffer_arg) {
  return router_pb.ListRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_ListRoomResponse(arg) {
  if (!(arg instanceof router_pb.ListRoomResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.ListRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_ListRoomResponse(buffer_arg) {
  return router_pb.ListRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_ListUserRequest(arg) {
  if (!(arg instanceof router_pb.ListUserRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.ListUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_ListUserRequest(buffer_arg) {
  return router_pb.ListUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_ListUserResponse(arg) {
  if (!(arg instanceof router_pb.ListUserResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.ListUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_ListUserResponse(buffer_arg) {
  return router_pb.ListUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageRequest(arg) {
  if (!(arg instanceof router_pb.UpdateMessageRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageRequest(buffer_arg) {
  return router_pb.UpdateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageResponse(arg) {
  if (!(arg instanceof router_pb.UpdateMessageResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageResponse(buffer_arg) {
  return router_pb.UpdateMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomRequest(arg) {
  if (!(arg instanceof router_pb.UpdateRoomRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomRequest(buffer_arg) {
  return router_pb.UpdateRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomResponse(arg) {
  if (!(arg instanceof router_pb.UpdateRoomResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomResponse(buffer_arg) {
  return router_pb.UpdateRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserRequest(arg) {
  if (!(arg instanceof router_pb.UpdateRoomUserRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateRoomUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserRequest(buffer_arg) {
  return router_pb.UpdateRoomUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserResponse(arg) {
  if (!(arg instanceof router_pb.UpdateRoomUserResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateRoomUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserResponse(buffer_arg) {
  return router_pb.UpdateRoomUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateUserRequest(arg) {
  if (!(arg instanceof router_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateUserRequest(buffer_arg) {
  return router_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_serviveragent_railschat_com_protobuf_proto_UpdateUserResponse(arg) {
  if (!(arg instanceof router_pb.UpdateUserResponse)) {
    throw new Error('Expected argument of type serviveragent.railschat.com.protobuf.proto.UpdateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_serviveragent_railschat_com_protobuf_proto_UpdateUserResponse(buffer_arg) {
  return router_pb.UpdateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoomServiceService = exports.RoomServiceService = {
  createRoom: {
    path: '/serviveragent.railschat.com.protobuf.proto.RoomService/CreateRoom',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.CreateRoomRequest,
    responseType: router_pb.CreateRoomResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_CreateRoomRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_CreateRoomRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_CreateRoomResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_CreateRoomResponse,
  },
  updateRoom: {
    path: '/serviveragent.railschat.com.protobuf.proto.RoomService/UpdateRoom',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.UpdateRoomRequest,
    responseType: router_pb.UpdateRoomResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomResponse,
  },
  updateUser: {
    path: '/serviveragent.railschat.com.protobuf.proto.RoomService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.UpdateRoomUserRequest,
    responseType: router_pb.UpdateRoomUserResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateRoomUserResponse,
  },
  list: {
    path: '/serviveragent.railschat.com.protobuf.proto.RoomService/List',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.ListRoomRequest,
    responseType: router_pb.ListRoomResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_ListRoomRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_ListRoomRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_ListRoomResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_ListRoomResponse,
  },
  delete: {
    path: '/serviveragent.railschat.com.protobuf.proto.RoomService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.DeleteRoomRequest,
    responseType: router_pb.DeleteRoomResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_DeleteRoomResponse,
  },
};

exports.RoomServiceClient = grpc.makeGenericClientConstructor(RoomServiceService);
var UserServiceService = exports.UserServiceService = {
  update: {
    path: '/serviveragent.railschat.com.protobuf.proto.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.UpdateUserRequest,
    responseType: router_pb.UpdateUserResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateUserRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateUserRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateUserResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateUserResponse,
  },
  // todo: streamのAPIも作る
list: {
    path: '/serviveragent.railschat.com.protobuf.proto.UserService/List',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.ListUserRequest,
    responseType: router_pb.ListUserResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_ListUserRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_ListUserRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_ListUserResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_ListUserResponse,
  },
  delete: {
    path: '/serviveragent.railschat.com.protobuf.proto.UserService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.DeleteUserRequest,
    responseType: router_pb.DeleteUserResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_DeleteUserRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_DeleteUserRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_DeleteUserResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_DeleteUserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
// create
// 後で考える
var MessageServiceService = exports.MessageServiceService = {
  create: {
    path: '/serviveragent.railschat.com.protobuf.proto.MessageService/Create',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.CreateMessageRequest,
    responseType: router_pb.CreateMessageResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_CreateMessageRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_CreateMessageRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_CreateMessageResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_CreateMessageResponse,
  },
  update: {
    path: '/serviveragent.railschat.com.protobuf.proto.MessageService/Update',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.UpdateMessageRequest,
    responseType: router_pb.UpdateMessageResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_UpdateMessageResponse,
  },
  list: {
    path: '/serviveragent.railschat.com.protobuf.proto.MessageService/List',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.ListMessageRequest,
    responseType: router_pb.ListMessageResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_ListMessageRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_ListMessageRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_ListMessageResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_ListMessageResponse,
  },
  delete: {
    path: '/serviveragent.railschat.com.protobuf.proto.MessageService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: router_pb.DeleteMessageRequest,
    responseType: router_pb.DeleteMessageResponse,
    requestSerialize: serialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageRequest,
    requestDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageRequest,
    responseSerialize: serialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageResponse,
    responseDeserialize: deserialize_serviveragent_railschat_com_protobuf_proto_DeleteMessageResponse,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
