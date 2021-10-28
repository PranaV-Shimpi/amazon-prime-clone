
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  user :any={
    
  }

  constructor(private router : Router,private http : HttpClient ) { }

  recover(){
  if(this.user.email ){
    var url = "https://apifromashu.herokuapp.com/api/recoverpassword"
    this.http.post(url,this.user).subscribe((response)=>{
      console.log("Response from signup api" , response)
    }, (error)=>{
      console.log("Error from signup api is" , error)
    })
  }
}
  ngOnInit(): void {
  }

}
