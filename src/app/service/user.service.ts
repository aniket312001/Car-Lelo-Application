import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userID:any
  mainURL = 'https://sellcar24hr.herokuapp.com/'
  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post(`${this.mainURL}api/auth/login`,data)
  }

  checklogin(data:any):Observable<any>{
    return this.http.post(`${this.mainURL}api/auth/checklogin`,data)
  }

  register(data:any):Observable<any>{
    return this.http.post(`${this.mainURL}api/auth/register`,data)
  }

  getAllUser():Observable<any>{
    return this.http.get<any>(`${this.mainURL}api/user`)
  }

  getUserById(id:any):Observable<any>{
    return this.http.get<any>(`${this.mainURL}api/user/`+id)
  }

  updateUser(id:any,data:any):Observable<any>{
    return this.http.put<any>(`${this.mainURL}api/user/`+id,data)
  }

}
