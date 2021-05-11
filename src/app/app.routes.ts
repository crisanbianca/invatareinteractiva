import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { InovareInEchipaComponent } from './inovare-in-echipa/inovare-in-echipa.component';
import { ClimatulInEchipaComponent } from './climatul-in-echipa/climatul-in-echipa.component';
import { DiversitateaInEchipaComponent } from './diversitatea-in-echipa/diversitatea-in-echipa.component';
import { LiderulEchipeiComponent } from './liderul-echipei/liderul-echipei.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path : 'inovare', component: InovareInEchipaComponent },
    { path : 'climat', component: ClimatulInEchipaComponent },
    { path : 'diversitate', component: DiversitateaInEchipaComponent },
    { path : 'lider', component: LiderulEchipeiComponent }

]

export const routes = RouterModule.forRoot(router);
