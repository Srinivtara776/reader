import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
 id:any
  data={
    id:'',
    title:'',
    author:'',
    publisher:'',
    publishDate:'',
    block:'',
    category:'',
    content:'',
    price:'',
    active:''
    
  }

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }
  updateBook(){

    this.registerService.updateBook(this.data.id,this.data).subscribe({
             next: (res:any)=>{
               console.log("updated success")
               console.log(res);
              

               window.location.href="/dashboard"
               
             }

    })
  }
      
}