import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-subscribedbooks',
  templateUrl: './subscribedbooks.component.html',
  styleUrls: ['./subscribedbooks.component.css']
})
export class SubscribedbooksComponent implements OnInit {
data={
    pay_id:'',
    readerName: '',
    readerEmail:'',
    paytime:'',
    book_id:'',
}
  constructor(private service:BookService) { }

  ngOnInit(): void {
  }
subscribedbooks(){
  this.service.saveSubscribeBooksReader(this.data.readerName,this.data.readerEmail,this.data.book_id).subscribe(
  {next: (res:any)=>{
    console.log("subscribed success")
    console.log(res)
  },
  error:(err:any)=>{
    console.log("subscription is failed")
    console.log(err)
  }
  })
}
}
