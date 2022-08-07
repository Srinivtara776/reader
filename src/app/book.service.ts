import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
   
  private baseUrl = "http://ctsjava852.iiht.tech:62798/api/v1/digitalbooks";
  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/books`);
  }
  getBooksByTitle(title:string): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/title/${title}`);
  }
  getBooksByPrice(price:number):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/price/${price}`);
  }
  getBooksByCategory(category:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/category/${category}`);
  }
  getBooksByAuthor(author:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/author/${author}`);
  }
  getBooksByPublisher(publisher:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}publisher/${publisher}`);
  }
}
