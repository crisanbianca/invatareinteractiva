import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button';
import { Lectie1Component } from './lectie1/lectie1.component'
import {YouTubePlayerModule} from '@angular/youtube-player';
import { VideoComponent } from './video/video.component';



var firebaseConfig = {
  apiKey: "AIzaSyAYWNrx5gMTOvLaIdy8lA7vISlX1K9hhLs",
  authDomain: "invatareinteractiva-1ecd0.firebaseapp.com",
  databaseURL: "https://invatareinteractiva-1ecd0-default-rtdb.firebaseio.com",
  projectId: "invatareinteractiva-1ecd0",
  storageBucket: "invatareinteractiva-1ecd0.appspot.com",
  messagingSenderId: "477827841488",
  appId: "1:477827841488:web:77be45806c81de16b28dd5"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    Lectie1Component,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    CommonModule,
    FormsModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    YouTubePlayerModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
