import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
 
  user:any = { }
  constructor(private router : Router , private http : HttpClient,private ngxLoader: NgxUiLoaderService) { 
    if(localStorage.token){
      this.router.navigate(["/home"])
    }
  }
 
  ngOnInit(): void {
  }

  
  login(){
    this.ngxLoader.start()
    var url = "https://apifromashu.herokuapp.com/api/login"
    if(this.user.email && this.user.password){
      this.http.post(url,this.user).subscribe((response:any)=>{
        console.log("response from login api" , response)
        if(response.token){
          localStorage.token =  response.token
          this.router.navigate(["/home"])
        }
        else{
          alert("Invalid Credentials")
        }
      } , (error)=>{
        console.log("Error from login api" , error)
      })
    }
    this.ngxLoader.stop()
  }
}
