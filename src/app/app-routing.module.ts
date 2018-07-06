import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
const routes:Routes=[
  {path:"",component:LandingComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"add-post",component:AddPostComponent,  canActivate:[AuthGuard]},
  {path:"client/edit/:id",component:EditClientComponent},
  {path:"client/:id",component:ClientDetailsComponent},
  {path:"settings",component:SettingComponent},
  {path:"**",component:NotFoundComponent},
]

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  declarations: []
})
export class AppRoutingModule { }
