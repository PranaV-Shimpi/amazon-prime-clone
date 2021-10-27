import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-videos',
  templateUrl: './play-videos.component.html',
  styleUrls: ['./play-videos.component.css']
})
export class PlayVideosComponent implements OnInit {

  constructor(private router : Router){
    if(!localStorage.token){
      this.router.navigate(["/login"])
    }
    } 

  ngOnInit(): void {
  }

}
