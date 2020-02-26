// package: serviveragent.railschat.com.protobuf.proto
// file: router.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateRoomRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): void;

    getRoomName(): string;
    setRoomName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRoomRequest): CreateRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRoomRequest;
    static deserializeBinaryFromReader(message: CreateRoomRequest, reader: jspb.BinaryReader): CreateRoomRequest;
}

export namespace CreateRoomRequest {
    export type AsObject = {
        userId: number,
        roomName: string,
    }
}

export class CreateRoomResponse extends jspb.Message { 
    getRoomId(): number;
    setRoomId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRoomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRoomResponse): CreateRoomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRoomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRoomResponse;
    static deserializeBinaryFromReader(message: CreateRoomResponse, reader: jspb.BinaryReader): CreateRoomResponse;
}

export namespace CreateRoomResponse {
    export type AsObject = {
        roomId: number,
    }
}

export class UpdateRoomRequest extends jspb.Message { 

    hasRoom(): boolean;
    clearRoom(): void;
    getRoom(): Room | undefined;
    setRoom(value?: Room): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRoomRequest): UpdateRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRoomRequest;
    static deserializeBinaryFromReader(message: UpdateRoomRequest, reader: jspb.BinaryReader): UpdateRoomRequest;
}

export namespace UpdateRoomRequest {
    export type AsObject = {
        room?: Room.AsObject,
    }
}

export class UpdateRoomResponse extends jspb.Message { 
    getRoomId(): number;
    setRoomId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRoomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRoomResponse): UpdateRoomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRoomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRoomResponse;
    static deserializeBinaryFromReader(message: UpdateRoomResponse, reader: jspb.BinaryReader): UpdateRoomResponse;
}

export namespace UpdateRoomResponse {
    export type AsObject = {
        roomId: number,
    }
}

export class UpdateRoomUserRequest extends jspb.Message { 
    getRoomId(): number;
    setRoomId(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;

    clearUserIdsList(): void;
    getUserIdsList(): Array<number>;
    setUserIdsList(value: Array<number>): void;
    addUserIds(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRoomUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRoomUserRequest): UpdateRoomUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRoomUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRoomUserRequest;
    static deserializeBinaryFromReader(message: UpdateRoomUserRequest, reader: jspb.BinaryReader): UpdateRoomUserRequest;
}

export namespace UpdateRoomUserRequest {
    export type AsObject = {
        roomId: number,
        userId: number,
        userIdsList: Array<number>,
    }
}

export class UpdateRoomUserResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRoomUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRoomUserResponse): UpdateRoomUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRoomUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRoomUserResponse;
    static deserializeBinaryFromReader(message: UpdateRoomUserResponse, reader: jspb.BinaryReader): UpdateRoomUserResponse;
}

export namespace UpdateRoomUserResponse {
    export type AsObject = {
    }
}

export class ListRoomRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListRoomRequest): ListRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRoomRequest;
    static deserializeBinaryFromReader(message: ListRoomRequest, reader: jspb.BinaryReader): ListRoomRequest;
}

export namespace ListRoomRequest {
    export type AsObject = {
        userId: number,
    }
}

export class ListRoomResponse extends jspb.Message { 
    clearRoomsList(): void;
    getRoomsList(): Array<Room>;
    setRoomsList(value: Array<Room>): void;
    addRooms(value?: Room, index?: number): Room;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListRoomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListRoomResponse): ListRoomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListRoomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListRoomResponse;
    static deserializeBinaryFromReader(message: ListRoomResponse, reader: jspb.BinaryReader): ListRoomResponse;
}

export namespace ListRoomResponse {
    export type AsObject = {
        roomsList: Array<Room.AsObject>,
    }
}

export class Room extends jspb.Message { 
    getRoomId(): number;
    setRoomId(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;

    getRoomName(): string;
    setRoomName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Room.AsObject;
    static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Room;
    static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
    export type AsObject = {
        roomId: number,
        userId: number,
        roomName: string,
    }
}

export class DeleteRoomRequest extends jspb.Message { 
    getRoomId(): number;
    setRoomId(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRoomRequest): DeleteRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRoomRequest;
    static deserializeBinaryFromReader(message: DeleteRoomRequest, reader: jspb.BinaryReader): DeleteRoomRequest;
}

export namespace DeleteRoomRequest {
    export type AsObject = {
        roomId: number,
        userId: number,
    }
}

export class DeleteRoomResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRoomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRoomResponse): DeleteRoomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRoomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRoomResponse;
    static deserializeBinaryFromReader(message: DeleteRoomResponse, reader: jspb.BinaryReader): DeleteRoomResponse;
}

export namespace DeleteRoomResponse {
    export type AsObject = {
    }
}

export class UpdateUserRequest extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        user?: User.AsObject,
    }
}

export class User extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): void;

    getUserName(): string;
    setUserName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        userId: number,
        userName: string,
    }
}

export class UpdateUserResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
    static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
    export type AsObject = {
    }
}

export class ListUserRequest extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): void;
    addUsers(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserRequest): ListUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserRequest;
    static deserializeBinaryFromReader(message: ListUserRequest, reader: jspb.BinaryReader): ListUserRequest;
}

export namespace ListUserRequest {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}

export class ListUserResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserResponse): ListUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserResponse;
    static deserializeBinaryFromReader(message: ListUserResponse, reader: jspb.BinaryReader): ListUserResponse;
}

export namespace ListUserResponse {
    export type AsObject = {
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        userId: number,
    }
}

export class DeleteUserResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserResponse): DeleteUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserResponse;
    static deserializeBinaryFromReader(message: DeleteUserResponse, reader: jspb.BinaryReader): DeleteUserResponse;
}

export namespace DeleteUserResponse {
    export type AsObject = {
    }
}

export class CreateMessageRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): void;

    getRoomId(): number;
    setRoomId(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMessageRequest): CreateMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMessageRequest;
    static deserializeBinaryFromReader(message: CreateMessageRequest, reader: jspb.BinaryReader): CreateMessageRequest;
}

export namespace CreateMessageRequest {
    export type AsObject = {
        userId: number,
        roomId: number,
        message: string,
    }
}

export class CreateMessageResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateMessageResponse): CreateMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateMessageResponse;
    static deserializeBinaryFromReader(message: CreateMessageResponse, reader: jspb.BinaryReader): CreateMessageResponse;
}

export namespace CreateMessageResponse {
    export type AsObject = {
    }
}

export class UpdateMessageRequest extends jspb.Message { 
    getMessageId(): number;
    setMessageId(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMessageRequest): UpdateMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMessageRequest;
    static deserializeBinaryFromReader(message: UpdateMessageRequest, reader: jspb.BinaryReader): UpdateMessageRequest;
}

export namespace UpdateMessageRequest {
    export type AsObject = {
        messageId: number,
        userId: number,
        message: string,
    }
}

export class UpdateMessageResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateMessageResponse): UpdateMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateMessageResponse;
    static deserializeBinaryFromReader(message: UpdateMessageResponse, reader: jspb.BinaryReader): UpdateMessageResponse;
}

export namespace UpdateMessageResponse {
    export type AsObject = {
    }
}

export class ListMessageRequest extends jspb.Message { 
    getRoomId(): number;
    setRoomId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListMessageRequest): ListMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMessageRequest;
    static deserializeBinaryFromReader(message: ListMessageRequest, reader: jspb.BinaryReader): ListMessageRequest;
}

export namespace ListMessageRequest {
    export type AsObject = {
        roomId: number,
    }
}

export class ListMessageResponse extends jspb.Message { 
    clearMessagesList(): void;
    getMessagesList(): Array<Message>;
    setMessagesList(value: Array<Message>): void;
    addMessages(value?: Message, index?: number): Message;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListMessageResponse): ListMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListMessageResponse;
    static deserializeBinaryFromReader(message: ListMessageResponse, reader: jspb.BinaryReader): ListMessageResponse;
}

export namespace ListMessageResponse {
    export type AsObject = {
        messagesList: Array<Message.AsObject>,
    }
}

export class Message extends jspb.Message { 
    getMessageId(): number;
    setMessageId(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;

    getMessage(): string;
    setMessage(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        messageId: number,
        userId: number,
        message: string,
    }
}

export class DeleteMessageRequest extends jspb.Message { 
    getMessageId(): number;
    setMessageId(value: number): void;

    getUserId(): number;
    setUserId(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMessageRequest): DeleteMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMessageRequest;
    static deserializeBinaryFromReader(message: DeleteMessageRequest, reader: jspb.BinaryReader): DeleteMessageRequest;
}

export namespace DeleteMessageRequest {
    export type AsObject = {
        messageId: number,
        userId: number,
    }
}

export class DeleteMessageResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteMessageResponse): DeleteMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteMessageResponse;
    static deserializeBinaryFromReader(message: DeleteMessageResponse, reader: jspb.BinaryReader): DeleteMessageResponse;
}

export namespace DeleteMessageResponse {
    export type AsObject = {
    }
}
