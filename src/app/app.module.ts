import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingComponent } from './components/setting/setting.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AddClientComponent } from './components/add-client/add-client.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { TodayComponent } from './components/today/today.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContactComponent } from './components/contact/contact.component';
import { BaziformComponent } from './components/baziform/baziform.component';
import { BaziresultComponent } from './components/baziresult/baziresult.component';


import { PostsService } from './services/posts.service';
import { AuthService } from './services/auth.service';
import { BirthService } from './services/birth.service';
import { ClientService } from './services/client.service';
import { LunerapiService } from './services/lunerapi.service';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';//needed for date picker to work

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ModalComponent } from './components/@common/modal/modal.component';
import { EditPostComponent } from './components/edit-post/edit-post.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    SidebarComponent,
    EditClientComponent,
    ClientDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingComponent,
    NotFoundComponent,
    AddClientComponent,
    FooterComponent,
    LandingComponent,
    AddPostComponent,
    PostDetailComponent,
    ConsultingComponent,
    IntroductionComponent,
    TodayComponent,
    PostsComponent,
    ContactComponent,
    BaziformComponent,
    BaziresultComponent,
    AboutmeComponent,
    ModalComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule
  ],
  providers: [PostsService,AuthService,BirthService,ClientService, LunerapiService],
  bootstrap: [AppComponent],
  entryComponents :[
    ModalComponent
  ]
})
export class AppModule { }
