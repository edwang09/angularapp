import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PostsComponent } from './components/posts/posts.component';
import { BaziformComponent } from './components/baziform/baziform.component';
import { BaziresultComponent } from './components/baziresult/baziresult.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './guards/auth.guard';
const routes:Routes=[
  {path:"cn",children:[
    {path:"",component:LandingComponent},
    {path:"login",component:LoginComponent},
    {path:"post/:id",component:PostDetailComponent},
    {path:"introduction",component:IntroductionComponent},
    {path:"posts",component:PostsComponent},
    {path:"consulting",component:ConsultingComponent},
    {path:"add-post",component:AddPostComponent,  canActivate:[AuthGuard]},
    {path:"edit-post/:id",component:EditPostComponent,  canActivate:[AuthGuard]},
    {path:"baziform",component:BaziformComponent },
    {path:"baziresult",component:BaziresultComponent  },
    {path:"aboutme",component:AboutmeComponent  },
  ]},
  {path:"",redirectTo:"/cn", pathMatch: 'full'},
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
