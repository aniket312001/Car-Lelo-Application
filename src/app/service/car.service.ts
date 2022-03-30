import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  addCar(data:any):Observable<any>{
    data.userId = localStorage.getItem('userId')

    if(localStorage.getItem('img1')){
      data.img1 = localStorage.getItem('img1')
    }
    if(localStorage.getItem('img2')){
      data.img2 = localStorage.getItem('img2')
    }
    if(localStorage.getItem('img3')){
      data.img3 = localStorage.getItem('img3')  // add data
    }

    // remove data from localStorage
    localStorage.removeItem('img1')
    localStorage.removeItem('img2')
    localStorage.removeItem('img3')

    return this.http.post<any>('http://localhost:3000/api/car/',data,{headers: {'Authorization':"Bearer "+localStorage.getItem('token')}})
  }


  getAllCar():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/car',{headers: {'Authorization':"Bearer "+localStorage.getItem('token')}})
  }


  getCarById(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/car/${id}`,{headers: {'Authorization':"Bearer "+localStorage.getItem('token')}})
  }

  getCarByUserId():Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/car/getbyuserid/'+ localStorage.getItem('userId'),{headers: {'Authorization':"Bearer "+localStorage.getItem('token')}})
  }

  getBrandName():Observable<any>{
    return this.http.get<any>('../../assets/brand.json')
  }

  getFAQ():Observable<any>{
    return this.http.get<any>('../../assets/FAQ.json')
  }



}
