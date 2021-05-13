import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizClimatComponent implements OnInit {

  score: number = 0;
  showResult: boolean = false;

  quizForm!: FormGroup;
  a1: string;
  q1: string[] = ['modul în care este percepută atmosfera si în care sunt create practicile, procedurile, recompensele', 'cât de eficientă este echipa',' cât de repede sunt atinse obiectivele'];

  a2: string;
  q2: string[] = ['Adevărat','Fals'];

  a3: string;
  q3: string[] = ['membrii echipei lucrează individual','fiecare membru aduce idei','membrii împart angajamentul pentru obiectivele echipei și pentru performanță'];

  a4: string;
  q4: string[] = ['viziunea, siguranță participativă, sprijin pentru inovație', 'independența, performanță, socializare', 'viziune, socializare, siguranță participativă'];

  a5: string;
  q5: string[] = ['Liderii încurajează membrii echipei să contribuie la generarea de idei','Liderii încurajează membrii să socializeze','Membrii  echipei primesc sprijin moral și practic pentru eforturile de inovare'];

  constructor() { }

  ngOnInit(): void {
    this.score=0;
    this.showResult = false;
  }

  onSubmit(){
    if(this.a1 === 'modul în care este percepută atmosfera si modul în care sunt create practicile, procedurile și recompensele')
      this.score += 1;
    if(this.a2 === 'Fals')
      this.score += 1;
    if(this.a3 === 'membrii împart angajamentul pentru obiectivele echipei și pentru performanță')
      this.score += 1;
    if(this.a4 === 'viziunea, siguranță participativă, sprijin pentru inovație')
      this.score += 1;
    if(this.a5 === 'Membrii  echipei primesc sprijin moral și practic pentru eforturile de inovare')
      this.score += 1;
    this.showResult = true;
  }

}
