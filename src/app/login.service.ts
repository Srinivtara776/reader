import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = "http://ctsjava852.iiht.tech:55955/author/api/v1";
  
  constructor(private httpClient:HttpClient) { }
  
  login(user : any): any{
 return this.httpClient.post(this.baseUrl+"/generateToken",user)
  }
  isloggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }
  // logout(){
  //   localStorage.removeItem('token')
  //   return true;
  // }

  getToken(){
    return localStorage.getItem("token")
  }
  
}
