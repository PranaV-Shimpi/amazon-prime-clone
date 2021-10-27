import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:any={

  }


  signup(){
    console.log("Here we will signup with the user details" , this.user)
    if(this.user.email && this.user.name && this.user.password){
      var url = "https://apifromashu.herokuapp.com/api/register"
      this.http.post(url,this.user).subscribe((response)=>{
        console.log("Response from signup api" , response)
      }, (error)=>{
        console.log("Error from signup api is" , error)
      })
    }
    else{
      alert("Please fill all details")
    }
  
  }


  constructor(private http  : HttpClient) { }

  ngOnInit(): void {
  }

}
