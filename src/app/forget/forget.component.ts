
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
    var url= "https://apifromshuashu.herokuapp.com/api/recoverpassword"
    this.http.post(url, this.user).subscribe()
  }
  
  ngOnInit(): void {
  }

}
