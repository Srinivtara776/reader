import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    username:'',
    password:''
  };
  register(){
    console.log(this.registerData)
    
  }

  constructor(private registerService:RegisterService) { }

 

  

  ngOnInit(): void {
  }

}
