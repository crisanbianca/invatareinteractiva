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
import { ResurseInovareComponent } from './inovare-in-echipa/resurse/resurse.component';
import { QuizInovareComponent } from './inovare-in-echipa/quiz/quiz.component';
import { ResurseClimatComponent } from './climatul-in-echipa/resurse/resurse.component';
import { QuizClimatComponent } from './climatul-in-echipa/quiz/quiz.component';
import { ResurseDiversitateComponent } from './diversitatea-in-echipa/resurse/resurse.component';
import { QuizDiversitateComponent } from './diversitatea-in-echipa/quiz/quiz.component';
import { ResurseLiderComponent } from './liderul-echipei/resurse/resurse.component';
import { QuizLiderComponent } from './liderul-echipei/quiz/quiz.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path : 'inovare', component: InovareInEchipaComponent},
    { path: 'inovare-resurse', component: ResurseInovareComponent },
    { path: 'inovare-quiz', component: QuizInovareComponent },
    { path : 'climat', component: ClimatulInEchipaComponent},
    { path: 'climat-resurse', component: ResurseClimatComponent },
    { path: 'climat-quiz', component: QuizClimatComponent  },
    { path : 'diversitate', component: DiversitateaInEchipaComponent},
    { path: 'diversitate-resurse', component: ResurseDiversitateComponent },
    { path: 'diversitate-quiz', component: QuizDiversitateComponent },
    { path : 'lider', component: LiderulEchipeiComponent},
    { path: 'lider-resurse', component: ResurseLiderComponent },
    { path: 'lider-quiz', component: QuizLiderComponent },

]

export const routes = RouterModule.forRoot(router);
