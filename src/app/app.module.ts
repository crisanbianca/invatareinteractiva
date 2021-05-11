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
import {YouTubePlayerModule} from '@angular/youtube-player';
import { InovareInEchipaComponent } from './inovare-in-echipa/inovare-in-echipa.component';
import { ClimatulInEchipaComponent } from './climatul-in-echipa/climatul-in-echipa.component';
import { DiversitateaInEchipaComponent } from './diversitatea-in-echipa/diversitatea-in-echipa.component';
import { LiderulEchipeiComponent } from './liderul-echipei/liderul-echipei.component';
import {MatCardModule} from '@angular/material/card';



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
    InovareInEchipaComponent,
    ClimatulInEchipaComponent,
    DiversitateaInEchipaComponent,
    LiderulEchipeiComponent
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
    MatCardModule,
    MatIconModule,
    YouTubePlayerModule,
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
