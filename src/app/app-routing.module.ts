import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TodayComponent } from './components/today/today.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { BaziformComponent } from './components/baziform/baziform.component';
import { BaziresultComponent } from './components/baziresult/baziresult.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
const routes:Routes=[
  {path:"",component:LandingComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"post/:id",component:PostDetailComponent},
  {path:"introduction",component:IntroductionComponent},
  {path:"today",component:TodayComponent},
  {path:"posts",component:PostsComponent},
  {path:"contact",component:ContactComponent},
  {path:"consulting",component:ConsultingComponent},
  {path:"add-post",component:AddPostComponent,  canActivate:[AuthGuard]},
  {path:"baziform",component:BaziformComponent },
  {path:"baziresult",component:BaziresultComponent  },
  {path:"aboutme",component:AboutmeComponent  },
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
