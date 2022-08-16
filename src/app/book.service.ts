import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
   
  //private baseUrl1= "http://localhost:8084/api/v1/digitalbooks";
  private baseUrl1= "http://ctsjava852.iiht.tech:59529/api/v1/digitalbooks";
  private baseUrl="http://localhost:9090/api/v1/digitalbooks";
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
    return this.httpClient.get<Book[]>(`${this.baseUrl}/publisher/${publisher}`);
  }
  getBooksByPublisherDate(publisher_date:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/publisher/${publisher_date}`);
  }
  saveSubscribeBooksReader(readerName:string,readerEmail:string,book_id:any):any{
    return this.httpClient.get(`${this.baseUrl}/subscribe/${readerName}/${readerEmail}/${book_id}`);

  }
  getSubscribeBooksReader(readerEmail:string):Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/subscribedBook/${readerEmail}`);
  }

  UnsubscribeBooksByReader(book_id:any,readerEmail:string):Observable<any>{
//    return this.httpClient.delete(`${this.baseUrl1}/deleteBookBySubIdAndEmail/${book_id}/${readerEmail}`);
return this.httpClient.delete(this.baseUrl1+"/deleteBookBySubIdAndEmail/"+book_id+"/"+readerEmail);  
}

}
