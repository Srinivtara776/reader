import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username:'',
    password:''
  };
  userLogin(){
    console.log(this.loginData)
    
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  

  token : any

   getToken(){

    console.log("form is submitted");
    if(this.loginData.username!='' && this.loginData.password!='' && this.loginData.username!=null && this.loginData.password!=null){
      console.log("we have to submit the form");
    this.loginService.login(this.loginData).subscribe((res:any)=>{
      //this.token=res
      console.log(res.token)
      localStorage.setItem("token",res.token)
      window.location.href="/dashboard"
    })
   
    window.location.href="/dashboard"
   
  
}
   
      }

  

    }
