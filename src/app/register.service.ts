import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  token1 :any
  private host3:string = "http://ctsjava852.iiht.tech:55955/author/api/v1/register";
  //private baseUrl1 = "http://localhost:8085/author/api/v1";
  private baseUrl= "http://ctsjava852.iiht.tech:55955/author/api/v1";

  //url = "http://ctsjava852.iiht.tech:58461/author/api/v1/createBook";

  constructor(private httpClient:HttpClient) { }
  registration(author: any) 
  {
   return  this.httpClient.post(this.host3,author)
  }
  // header = {
  //   headers: new HttpHeaders().
  //   set("Authorization", `Bearer ${localStorage.getItem('token')}`)
  // }
  createBook(book:any) {
    
    this.token1 = localStorage.getItem('token')
    let myHeaders:HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append("Content-type", "application/json");
    myHeaders = myHeaders.append("Authorization", `Bearer ${this.token1}`)
    return this.httpClient.post(`${this.baseUrl}/createBook`,book,{headers: myHeaders})
  }
  updateBook(id:any,book:any) {
    
    this.token1 = localStorage.getItem('token')
    let myHeaders:HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append("Content-type", "application/json");
    myHeaders = myHeaders.append("Authorization", `Bearer ${this.token1}`)
    return this.httpClient.put(`${this.baseUrl}/modifybooks/${id}`,book,{headers: myHeaders})
  }
  

  

}
