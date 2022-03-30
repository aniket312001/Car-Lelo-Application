import { Injectable } from '@angular/core';

import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {


  socket:any

  constructor() {   }

  setupSocketConnection(id:any) {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('create',id)
  }

  sendMessage(msg:any){
    this.socket.emit('my message', msg);


  }

}
