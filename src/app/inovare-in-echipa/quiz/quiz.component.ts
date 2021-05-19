import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizInovareComponent implements OnInit {

  public selection: string;
  score: number = 0;
  showResult: boolean = false;

  quizForm!: FormGroup;
  a1: string;
  q1: string[] = ['Prezența ideilor noi','Contribuția tuturor membrilor echipei la generarea de idei','În general înțeleasă ca incluzând atât dezvoltarea, cât și implementarea noutăților'];

  a2: string;
  q2: string[] = ['Adevărat','Fals'];

  a3: string;
  q3: string[] = ['au membri diverși din punct de vedere cultural','au membri diverși din punct de vedere al statutului','au membri cu medii diverse și se angajează într-un proces de integrare a informațiilor echipei'];

  a4: string;
  q4: string[] = ['Adevărat','Fals'];

  a5: string;
  q5: string[] = ['Adevărat','Fals'];

  constructor() { }

  ngOnInit(): void {
    this.score=0;
    this.showResult = false;
  }

  onSubmit(){
    this.score=0;
    if(this.a1 === 'În general înțeleasă ca incluzând atât dezvoltarea, cât și implementarea noutăților')
      this.score += 1;
    if(this.a2 === 'Adevărat')
      this.score += 1;
    if(this.a3 === 'au membri cu medii diverse și se angajează într-un proces de integrare a informațiilor echipei')
      this.score += 1;
    if(this.a4 === 'Adevărat')
      this.score += 1;
    if(this.a5 === 'Fals')
      this.score += 1;
    this.showResult = true;
  }

}
