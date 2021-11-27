import { Injectable, Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
//npm i @nestjs/websockets @nestjs/platform-socket.io

@WebSocketGateway()
export class AppGetaway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('AppGeteway');

  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }

  //ha csatlakozott a másik fél, OnGatewayConnection interface-ből jön
  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Method not implemented. ${client.id}`);
  }

  //ha lecsatlakozott a másik fél, OnGatewayDisconnect interface-ből jön
  handleDisconnect(client: Socket) {
    this.logger.log(`Method not implemented. ${client.id}`);
  }

  // @SubscribeMessage('msgToServer')
  // handleMessage(client: Socket, text: string): WsResponse<string> {
  //   // client.emit("msgToClient", text)
  //   return {
  //     event: 'msgToClient',
  //     data: text,
  //   };
  // }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string): void {
    // client.emit("msgToClient", text)
    this.wss.emit('msgToClient', text);
  }
}
