import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos:any = []
  videodata : any = {
    name:"Friends",
    image:"https://res.cloudinary.com/lekhisahabdev/image/upload/v1635328017/i4ogq8bmrrsy0hpdyvcd.jpg",
    description:"Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening."
  }
  constructor(private http : HttpClient) { 
    var url = "https://videoapibyashu.herokuapp.com/allvideos"
    let myheaders = new HttpHeaders()
    myheaders =  myheaders.append("authtoken", localStorage.token)
     this.http.get(url , {
       headers:myheaders
     }).subscribe((response:any)=>{
       console.log("response from getting all videos api" , response)
       this.videos = response.data
     } , (error)=>{
       console.log("Error from all videos api" , error)
     })
  }

  ngOnInit(): void {
  }

}
