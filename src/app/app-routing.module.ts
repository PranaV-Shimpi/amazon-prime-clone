import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayvideoComponent } from './playvideo/playvideo.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'addvideo', component:AddvideoComponent},
  {path:'playvideo', component:PlayvideoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
