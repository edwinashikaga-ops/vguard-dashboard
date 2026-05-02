import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class RealtimeGateway {
  @WebSocketServer()
  server: Server;

  broadcast(event: string, data: any) {
    this.server.emit(event, data);
  }

  // 🔥 TAMBAH INI
  sendEvent(data: any) {
    this.server.emit('event', data);
  }
}