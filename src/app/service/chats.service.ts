import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private http:HttpClient) { }

  getChatsByRoomId(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/chat/getpersonalchats/'+id)
  }

  addChatByRoomId(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/chat/addpersonalchats/',data)
  }


  addChatList(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/api/list/addList',data)
  }

  getChatList(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/list/getlist/'+id)
  }

}
