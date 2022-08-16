import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  data={
    id:'',
    title:'',
    author:'',
    publisher:'',
    publisher_date:'',
    block:'',
    category:'',
    content:'',
    price:'',
    active:''
    
  }

  

  constructor(private registerService:RegisterService , private router:Router) { }

  ngOnInit(): void {
    
  }
  
  createBook(){

       this.registerService.createBook(this.data).subscribe(
        book=>{
          console.log(book)
          console.log(localStorage.getItem('loggedUser'))
          
          window.location.href="/dashboard"
        }
        
      
      )
      
     
    }

    
  
}

