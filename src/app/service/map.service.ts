import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http : HttpClient) { }
// https://positionstack.com/quickstart
  getmapdata(loc:any):Observable<any>{
    return this.http.get<any>(`http://api.positionstack.com/v1/forward?access_key=0894c2db93edc57db13e4b797b903655&query=${loc} india`)
  }
}
