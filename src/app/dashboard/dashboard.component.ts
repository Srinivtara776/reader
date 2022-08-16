import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  book={
    id:'',
    title:'',
    author:'',
    publisher:'',
    publishDate:'',
    block:'',
    category:'',
    content:'',
    price:''
  }


  constructor(private registerService:RegisterService, private loginService:LoginService, private router:Router) {
    
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    
    window.location.href="/login"


    return true;

  }
  
  
}