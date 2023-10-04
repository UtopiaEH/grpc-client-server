// package: echo
// file: echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as echo_pb from "./echo_pb";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echoMessage: IEchoServiceService_IechoMessage;
}

interface IEchoServiceService_IechoMessage extends grpc.MethodDefinition<echo_pb.EchoRequest, echo_pb.EchoResponse> {
    path: "/echo.EchoService/echoMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<echo_pb.EchoRequest>;
    requestDeserialize: grpc.deserialize<echo_pb.EchoRequest>;
    responseSerialize: grpc.serialize<echo_pb.EchoResponse>;
    responseDeserialize: grpc.deserialize<echo_pb.EchoResponse>;
}

export const EchoServiceService: IEchoServiceService;

export interface IEchoServiceServer {
    echoMessage: grpc.handleUnaryCall<echo_pb.EchoRequest, echo_pb.EchoResponse>;
}

export interface IEchoServiceClient {
    echoMessage(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echoMessage(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    echoMessage(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
}

export class EchoServiceClient extends grpc.Client implements IEchoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public echoMessage(request: echo_pb.EchoRequest, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echoMessage(request: echo_pb.EchoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
    public echoMessage(request: echo_pb.EchoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: echo_pb.EchoResponse) => void): grpc.ClientUnaryCall;
}
