import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  video:any = {
    name:"Friends",
    image:"https://res.cloudinary.com/lekhisahabdev/image/upload/v1635328017/i4ogq8bmrrsy0hpdyvcd.jpg",
    description:"Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening."
  }
  constructor() { }

  ngOnInit(): void {
  }

}
