// package: serviveragent.railschat.com.protobuf.proto
// file: router.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as router_pb from "./router_pb";

interface IRoomServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createRoom: IRoomServiceService_ICreateRoom;
    updateRoom: IRoomServiceService_IUpdateRoom;
    updateUser: IRoomServiceService_IUpdateUser;
    list: IRoomServiceService_IList;
    delete: IRoomServiceService_IDelete;
}

interface IRoomServiceService_ICreateRoom extends grpc.MethodDefinition<router_pb.CreateRoomRequest, router_pb.CreateRoomResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.RoomService/CreateRoom"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.CreateRoomRequest>;
    requestDeserialize: grpc.deserialize<router_pb.CreateRoomRequest>;
    responseSerialize: grpc.serialize<router_pb.CreateRoomResponse>;
    responseDeserialize: grpc.deserialize<router_pb.CreateRoomResponse>;
}
interface IRoomServiceService_IUpdateRoom extends grpc.MethodDefinition<router_pb.UpdateRoomRequest, router_pb.UpdateRoomResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.RoomService/UpdateRoom"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.UpdateRoomRequest>;
    requestDeserialize: grpc.deserialize<router_pb.UpdateRoomRequest>;
    responseSerialize: grpc.serialize<router_pb.UpdateRoomResponse>;
    responseDeserialize: grpc.deserialize<router_pb.UpdateRoomResponse>;
}
interface IRoomServiceService_IUpdateUser extends grpc.MethodDefinition<router_pb.UpdateRoomUserRequest, router_pb.UpdateRoomUserResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.RoomService/UpdateUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.UpdateRoomUserRequest>;
    requestDeserialize: grpc.deserialize<router_pb.UpdateRoomUserRequest>;
    responseSerialize: grpc.serialize<router_pb.UpdateRoomUserResponse>;
    responseDeserialize: grpc.deserialize<router_pb.UpdateRoomUserResponse>;
}
interface IRoomServiceService_IList extends grpc.MethodDefinition<router_pb.ListRoomRequest, router_pb.ListRoomResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.RoomService/List"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.ListRoomRequest>;
    requestDeserialize: grpc.deserialize<router_pb.ListRoomRequest>;
    responseSerialize: grpc.serialize<router_pb.ListRoomResponse>;
    responseDeserialize: grpc.deserialize<router_pb.ListRoomResponse>;
}
interface IRoomServiceService_IDelete extends grpc.MethodDefinition<router_pb.DeleteRoomRequest, router_pb.DeleteRoomResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.RoomService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.DeleteRoomRequest>;
    requestDeserialize: grpc.deserialize<router_pb.DeleteRoomRequest>;
    responseSerialize: grpc.serialize<router_pb.DeleteRoomResponse>;
    responseDeserialize: grpc.deserialize<router_pb.DeleteRoomResponse>;
}

export const RoomServiceService: IRoomServiceService;

export interface IRoomServiceServer {
    createRoom: grpc.handleUnaryCall<router_pb.CreateRoomRequest, router_pb.CreateRoomResponse>;
    updateRoom: grpc.handleUnaryCall<router_pb.UpdateRoomRequest, router_pb.UpdateRoomResponse>;
    updateUser: grpc.handleUnaryCall<router_pb.UpdateRoomUserRequest, router_pb.UpdateRoomUserResponse>;
    list: grpc.handleUnaryCall<router_pb.ListRoomRequest, router_pb.ListRoomResponse>;
    delete: grpc.handleUnaryCall<router_pb.DeleteRoomRequest, router_pb.DeleteRoomResponse>;
}

export interface IRoomServiceClient {
    createRoom(request: router_pb.CreateRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.CreateRoomResponse) => void): grpc.ClientUnaryCall;
    createRoom(request: router_pb.CreateRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.CreateRoomResponse) => void): grpc.ClientUnaryCall;
    createRoom(request: router_pb.CreateRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.CreateRoomResponse) => void): grpc.ClientUnaryCall;
    updateRoom(request: router_pb.UpdateRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomResponse) => void): grpc.ClientUnaryCall;
    updateRoom(request: router_pb.UpdateRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomResponse) => void): grpc.ClientUnaryCall;
    updateRoom(request: router_pb.UpdateRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: router_pb.UpdateRoomUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: router_pb.UpdateRoomUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomUserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: router_pb.UpdateRoomUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomUserResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.ListRoomResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.ListRoomResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.ListRoomResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteRoomResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteRoomResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteRoomResponse) => void): grpc.ClientUnaryCall;
}

export class RoomServiceClient extends grpc.Client implements IRoomServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createRoom(request: router_pb.CreateRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.CreateRoomResponse) => void): grpc.ClientUnaryCall;
    public createRoom(request: router_pb.CreateRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.CreateRoomResponse) => void): grpc.ClientUnaryCall;
    public createRoom(request: router_pb.CreateRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.CreateRoomResponse) => void): grpc.ClientUnaryCall;
    public updateRoom(request: router_pb.UpdateRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomResponse) => void): grpc.ClientUnaryCall;
    public updateRoom(request: router_pb.UpdateRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomResponse) => void): grpc.ClientUnaryCall;
    public updateRoom(request: router_pb.UpdateRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: router_pb.UpdateRoomUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: router_pb.UpdateRoomUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomUserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: router_pb.UpdateRoomUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateRoomUserResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.ListRoomResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.ListRoomResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.ListRoomResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteRoomRequest, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteRoomResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteRoomResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteRoomResponse) => void): grpc.ClientUnaryCall;
}

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    update: IUserServiceService_IUpdate;
    list: IUserServiceService_IList;
    delete: IUserServiceService_IDelete;
}

interface IUserServiceService_IUpdate extends grpc.MethodDefinition<router_pb.UpdateUserRequest, router_pb.UpdateUserResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.UserService/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<router_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<router_pb.UpdateUserResponse>;
    responseDeserialize: grpc.deserialize<router_pb.UpdateUserResponse>;
}
interface IUserServiceService_IList extends grpc.MethodDefinition<router_pb.ListUserRequest, router_pb.ListUserResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.UserService/List"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.ListUserRequest>;
    requestDeserialize: grpc.deserialize<router_pb.ListUserRequest>;
    responseSerialize: grpc.serialize<router_pb.ListUserResponse>;
    responseDeserialize: grpc.deserialize<router_pb.ListUserResponse>;
}
interface IUserServiceService_IDelete extends grpc.MethodDefinition<router_pb.DeleteUserRequest, router_pb.DeleteUserResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.UserService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<router_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<router_pb.DeleteUserResponse>;
    responseDeserialize: grpc.deserialize<router_pb.DeleteUserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    update: grpc.handleUnaryCall<router_pb.UpdateUserRequest, router_pb.UpdateUserResponse>;
    list: grpc.handleUnaryCall<router_pb.ListUserRequest, router_pb.ListUserResponse>;
    delete: grpc.handleUnaryCall<router_pb.DeleteUserRequest, router_pb.DeleteUserResponse>;
}

export interface IUserServiceClient {
    update(request: router_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    update(request: router_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    update(request: router_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.ListUserResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.ListUserResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.ListUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public update(request: router_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: router_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public update(request: router_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateUserResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.ListUserResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.ListUserResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.ListUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteUserResponse) => void): grpc.ClientUnaryCall;
}

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IMessageServiceService_ICreate;
    update: IMessageServiceService_IUpdate;
    list: IMessageServiceService_IList;
    delete: IMessageServiceService_IDelete;
}

interface IMessageServiceService_ICreate extends grpc.MethodDefinition<router_pb.CreateMessageRequest, router_pb.CreateMessageResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.MessageService/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.CreateMessageRequest>;
    requestDeserialize: grpc.deserialize<router_pb.CreateMessageRequest>;
    responseSerialize: grpc.serialize<router_pb.CreateMessageResponse>;
    responseDeserialize: grpc.deserialize<router_pb.CreateMessageResponse>;
}
interface IMessageServiceService_IUpdate extends grpc.MethodDefinition<router_pb.UpdateMessageRequest, router_pb.UpdateMessageResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.MessageService/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.UpdateMessageRequest>;
    requestDeserialize: grpc.deserialize<router_pb.UpdateMessageRequest>;
    responseSerialize: grpc.serialize<router_pb.UpdateMessageResponse>;
    responseDeserialize: grpc.deserialize<router_pb.UpdateMessageResponse>;
}
interface IMessageServiceService_IList extends grpc.MethodDefinition<router_pb.ListMessageRequest, router_pb.ListMessageResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.MessageService/List"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.ListMessageRequest>;
    requestDeserialize: grpc.deserialize<router_pb.ListMessageRequest>;
    responseSerialize: grpc.serialize<router_pb.ListMessageResponse>;
    responseDeserialize: grpc.deserialize<router_pb.ListMessageResponse>;
}
interface IMessageServiceService_IDelete extends grpc.MethodDefinition<router_pb.DeleteMessageRequest, router_pb.DeleteMessageResponse> {
    path: string; // "/serviveragent.railschat.com.protobuf.proto.MessageService/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<router_pb.DeleteMessageRequest>;
    requestDeserialize: grpc.deserialize<router_pb.DeleteMessageRequest>;
    responseSerialize: grpc.serialize<router_pb.DeleteMessageResponse>;
    responseDeserialize: grpc.deserialize<router_pb.DeleteMessageResponse>;
}

export const MessageServiceService: IMessageServiceService;

export interface IMessageServiceServer {
    create: grpc.handleUnaryCall<router_pb.CreateMessageRequest, router_pb.CreateMessageResponse>;
    update: grpc.handleUnaryCall<router_pb.UpdateMessageRequest, router_pb.UpdateMessageResponse>;
    list: grpc.handleUnaryCall<router_pb.ListMessageRequest, router_pb.ListMessageResponse>;
    delete: grpc.handleUnaryCall<router_pb.DeleteMessageRequest, router_pb.DeleteMessageResponse>;
}

export interface IMessageServiceClient {
    create(request: router_pb.CreateMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.CreateMessageResponse) => void): grpc.ClientUnaryCall;
    create(request: router_pb.CreateMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.CreateMessageResponse) => void): grpc.ClientUnaryCall;
    create(request: router_pb.CreateMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.CreateMessageResponse) => void): grpc.ClientUnaryCall;
    update(request: router_pb.UpdateMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateMessageResponse) => void): grpc.ClientUnaryCall;
    update(request: router_pb.UpdateMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateMessageResponse) => void): grpc.ClientUnaryCall;
    update(request: router_pb.UpdateMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateMessageResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.ListMessageResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.ListMessageResponse) => void): grpc.ClientUnaryCall;
    list(request: router_pb.ListMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.ListMessageResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteMessageResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteMessageResponse) => void): grpc.ClientUnaryCall;
    delete(request: router_pb.DeleteMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteMessageResponse) => void): grpc.ClientUnaryCall;
}

export class MessageServiceClient extends grpc.Client implements IMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: router_pb.CreateMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.CreateMessageResponse) => void): grpc.ClientUnaryCall;
    public create(request: router_pb.CreateMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.CreateMessageResponse) => void): grpc.ClientUnaryCall;
    public create(request: router_pb.CreateMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.CreateMessageResponse) => void): grpc.ClientUnaryCall;
    public update(request: router_pb.UpdateMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateMessageResponse) => void): grpc.ClientUnaryCall;
    public update(request: router_pb.UpdateMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateMessageResponse) => void): grpc.ClientUnaryCall;
    public update(request: router_pb.UpdateMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.UpdateMessageResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.ListMessageResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.ListMessageResponse) => void): grpc.ClientUnaryCall;
    public list(request: router_pb.ListMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.ListMessageResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteMessageRequest, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteMessageResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteMessageResponse) => void): grpc.ClientUnaryCall;
    public delete(request: router_pb.DeleteMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: router_pb.DeleteMessageResponse) => void): grpc.ClientUnaryCall;
}
