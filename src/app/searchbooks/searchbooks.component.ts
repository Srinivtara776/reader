import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-searchbooks',
  templateUrl: './searchbooks.component.html',
  styleUrls: ['./searchbooks.component.css']
})
export class SearchbooksComponent implements OnInit {
  books : Book[]=[];
  booktitledata:any;
  bookpricedata:any;
  bookcategorydata:any;
  bookauthordata:any;
  bookpublisherdata:any;

  

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }
  getBooksByTitle(title:string){
    this.bookService.getBooksByTitle(title).subscribe({
      next: (res:any)=>{
        console.log("books data is successfully fetched based on title")
        console.log(res);
        this.booktitledata=res;
      },
      error: (err:any)=>{
        console.log("failed to fetch data based on title")
        console.log(err)
      }
    })
  }
  getBooksByPrice(price:any){
    this.bookService.getBooksByPrice(price).subscribe({
      next: (res:any)=>{
        console.log("books data is successfully fetched based on price")
        console.log(res);
        this.bookpricedata=res;
      },
      error: (err:any)=>{
        console.log("failed to fetch data based on price")
        console.log(err)
      }
    })
  }
  getBooksByCategory(category:string){
    this.bookService.getBooksByCategory(category).subscribe({
      next: (res:any)=>{
        console.log("books data is successfully fetched based on category")
        console.log(res);
        this.bookcategorydata=res;
      },
      error: (err:any)=>{
        console.log("failed to fetch data based on category")
        console.log(err)
      }
    })
  }
  getBooksByPublisher(publisher:string){
    this.bookService.getBooksByPublisher(publisher).subscribe({
      next: (res:any)=>{
        console.log("books data is successfully fetched based on publisher")
        console.log(res);
        this.bookpublisherdata=res;
      },
      error: (err:any)=>{
        console.log("failed to fetch data based on publisher")
        console.log(err)
      }
    })
  }
  getBooksByAuthor(author:string){
    this.bookService.getBooksByAuthor(author).subscribe({
      next: (res:any)=>{
        console.log("books data is successfully fetched based on author")
        console.log(res);
        this.bookpublisherdata=res;
      },
      error: (err:any)=>{
        console.log("failed to fetch data based on author")
        console.log(err)
      }
    })
  }



}
