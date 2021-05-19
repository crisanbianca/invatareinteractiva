import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizDiversitateComponent implements OnInit {

  score: number = 0;
  showResult: boolean = false;

  quizForm!: FormGroup;
  a1: string;
  q1: string[] = ['Fondul informațional generos','Socializare intensă între membrii echipei','Generare facilă de idei'];

  a2: string;
  q2: string[] = ['Adevărat','Fals'];

  a3: string;
  q3: string[] = ['Adevărat','Fals'];

  a4: string;
  q4: string[] = ['Adevărat','Fals'];

  a5: string;
  q5: string[] = ['Leadership autoritar','Leadership participativ','Leadership transformațional'];

  constructor() { }

  ngOnInit(): void {
    this.score=0;
    this.showResult = false;
  }

  onSubmit(){
    this.score=0;
    if(this.a1 === 'Fondul informațional generos')
      this.score += 1;
    if(this.a2 === 'Adevărat')
      this.score += 1;
    if(this.a3 === 'Adevărat')
      this.score += 1;
    if(this.a4 === 'Fals')
      this.score += 1;
    if(this.a5 === 'Leadership transformațional')
      this.score += 1;
    this.showResult = true;
  }

}
