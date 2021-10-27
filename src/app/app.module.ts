import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VideoComponent } from './video/video.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { PlayvideoComponent } from './playvideo/playvideo.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddvideoComponent } from './addvideo/addvideo.component'
import { ForgetComponent} from './forget/forget.component'
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from "ngx-ui-loader"

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "rgba(12,80,219,0.98)",
  "bgsOpacity": 1,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "three-strings",
  "blur": 5,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "lightgreen",
  "fgsPosition": "center-center",
  "fgsSize": 60,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "lightgreen",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
  };


  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VideoComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    PlayvideoComponent,
    ForgetComponent,
    AddvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
