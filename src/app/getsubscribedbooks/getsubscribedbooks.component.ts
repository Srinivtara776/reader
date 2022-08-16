import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
@Component({
  selector: 'app-getsubscribedbooks',
  templateUrl: './getsubscribedbooks.component.html',
  styleUrls: ['./getsubscribedbooks.component.css']
})
export class GetsubscribedbooksComponent implements OnInit {
  books : Book[]=[];
  booktitledata:any;
  bookpricedata:any;
  bookcategorydata:any;
  bookauthordata:any;
  bookpublisherdata:any;
  bookactivedata:any;
  
  

   
    readerEmail: any='';
    readerEmail1: any='';
   
    
   
 subscribedbook : any[] =[]

  constructor(private service:BookService, private bookSerive:BookService) { }

  ngOnInit(): void {
  }

  getsubscribedbooks(){
    this.readerEmail1 = this.readerEmail
    this.service.getSubscribeBooksReader(this.readerEmail).subscribe(
    {next: (res:any)=>{
      console.log("fetched subscribed books")
      console.log(res)
      this.subscribedbook = res
    },
    error:(err:any)=>{
      console.log("failed to fetch subscribed books")
      console.log(err)
    }
    })
  }
  unsubscribeBook(book_id : any){
    console.log(book_id)
    this.service.UnsubscribeBooksByReader(book_id,this.readerEmail1).subscribe({
      next: (res:any)=>{
        console.log("book is unsubscribed successfully")
        console.log(res)
      },
      error:(err:any)=>{
        console.log("failed to unsubscribe")
        console.log(err)
      }
    })
  }
  }
