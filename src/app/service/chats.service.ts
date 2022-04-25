import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  mainURL = 'https://sellcar24hr.herokuapp.com/'
  constructor(private http:HttpClient) { }

  getChatsByRoomId(id:any):Observable<any>{
    return this.http.get<any>(`${this.mainURL}api/chat/getpersonalchats/`+id)
  }

  addChatByRoomId(data:any):Observable<any>{
    return this.http.post<any>(`${this.mainURL}api/chat/addpersonalchats/`,data)
  }


  addChatList(data:any):Observable<any>{
    return this.http.post<any>(`${this.mainURL}api/list/addList`,data)
  }

  getChatList(id:any):Observable<any>{
    return this.http.get<any>(`${this.mainURL}api/list/getlist/`+id)
  }

}
