import {
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' }
})
export class WsGateway {

  @WebSocketServer()
  server: Server;

  emitEvent(data: any) {
    this.server.emit('event', data);
  }
}