import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayvideoComponent implements OnInit {
  videodetails:any 
  constructor( private loader : NgxUiLoaderService ,private http : HttpClient, private router : Router , private route : ActivatedRoute) {
    var videoid = this.route.snapshot.params.videoid
    if(!localStorage.token){
      this.router.navigate(["/login"])
    }
    else{
      var url = "https://videoapibyashu.herokuapp.com/video/"+videoid
      let myheaders = new HttpHeaders()
    myheaders =  myheaders.append("authtoken", localStorage.token)
    this.loader.start()
       this.http.get(url,{
        headers:myheaders
      }).subscribe((response:any)=>{
        this.loader.stop()
        console.log("Response from video details api" ,response)
        this.videodetails =  response.data
      } , (error)=>{
        console.log("Error from video details api" , error)
      })
    }
  }

  ngOnInit(): void {
  }

}
