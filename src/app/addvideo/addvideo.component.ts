import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  file:any
  title:any
  genre:any
  imageurl:any
  constructor(private router : Router , private http : HttpClient) { 
    if(!localStorage.token){
      this.router.navigate(["/login"])
    }
  }


  uploadImage(event:any){
    var url = "https://apifromashu.herokuapp.com/api/upload"
    var myheaders =  new HttpHeaders()
    var formdata = new FormData()
    formdata.append("file" , event.target.files[0])
    myheaders = myheaders.append("authtoken" , localStorage.token)
    this.http.post(url,formdata , {
      headers:myheaders
    }).subscribe((response:any)=>{
      console.log("Response from image upload api" , response)
      this.imageurl = response.imageUrl
    } , (error)=>{
      console.log("mage uploading error", error)
    })
  }

  addVideo(){
    if(this.file){
      console.log("Here we will upload the video" , this.file)
      var url = "https://videouploadbyashu.herokuapp.com/upload"
      var myheaders =  new HttpHeaders()
      var formdata = new FormData()
      formdata.append("file" , this.file)
      formdata.append("imageurl", this.imageurl)
      myheaders = myheaders.append("authtoken" , localStorage.token)
      this.http.post(url,formdata , {
        headers:myheaders
      }).subscribe((response:any)=>{
        console.log("Response from image upload api" , response)
        this.imageurl = response.imageUrl
      } , (error)=>{
        console.log("mage uploading error", error)
      })
    }
    else{
      alert("add a video first")
    }
    
  }

  getFile(event:any){
      this.file = event.target.files[0]
  }

  ngOnInit(): void {
  }

}
