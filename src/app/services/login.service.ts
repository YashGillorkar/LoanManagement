import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public getAdmin(username,password):Observable<any>
  {
    return this.http.get(`http://localhost:8080/getAdmin/${username}/${password}`)
  }

  public postEmployee( emp:any){
    return this.http.post(`http://localhost:8080/saveAdmin` , emp)
  }

  public getAllData():Observable<any>
  {
    return this.http.get(`http://localhost:8080/getAll`);
  }
}