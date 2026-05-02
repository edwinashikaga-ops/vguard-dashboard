import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WSGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('✅ WebSocket Ready');
  }

  handleConnection(client: Socket) {
    console.log('🔌 Client connected:', client.id);
  }

  sendEvent(data: any) {
    this.server.emit('event', data);
  }
}