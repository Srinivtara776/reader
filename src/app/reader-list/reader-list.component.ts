import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service'
@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent implements OnInit {

  //books: Book[];
  books: Book[] = [];
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
 private getAllBooks(){
   this.bookService.getBooks().subscribe(data =>{
     this.books =data;
   });
 }
 
}
