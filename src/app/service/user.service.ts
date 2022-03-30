import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userID:any

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/login',data)
  }
  register(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/auth/register',data)
  }

  getAllUser():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/user')
  }

  getUserById(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/user/'+id)
  }

}
