import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.component.html',
  styleUrls: ['./playvideo.component.css']
})
export class PlayvideoComponent implements OnInit {
  
  constructor(private router : Router) { 
    if(!localStorage.token){
      this.router.navigate(["/login"])
    }
  }

  ngOnInit(): void {
  }

}
