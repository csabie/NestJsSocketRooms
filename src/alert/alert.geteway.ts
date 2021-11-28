import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
//npm i @nestjs/websockets @nestjs/platform-socket.io

@WebSocketGateway({ namespace: '/alert' })
export class AlertGeteway {
  @WebSocketServer() wss: Server;
  sendtoAll(msg: string) {
    this.wss.emit('alertToClient', { type: 'Alert', message: msg });
  }
}
