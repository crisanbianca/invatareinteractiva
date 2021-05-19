import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizLiderComponent implements OnInit {


  score: number = 0;
  showResult: boolean = false;

  quizForm!: FormGroup;
  a1: string;
  q1: string[] = ['Generarea a prea multe idei','Lipsa de organizare','Personalitatea și viziunea liderului pot împiedica creativitatea la nivelul membrilor echipei'];

  a2: string;
  q2: string[] = ['Tranzacțional','Transformațional','Evitant'];

  a3: string;
  q3: string[] = ['Fiecare individ este și membru al echipei și lider în același timp','Liderul adoptă 2 stiluri de conducere','Distincția dintre generarea de idei și implementarea ideilor'];

  a4: string;
  q4: string[] = ['Pe măsură ce înaintează inovațiile către implementare','Înainte de implementarea inovațiilor','Niciodată'];

  a5: string;
  q5: string[] = ['Liderul gândește în locul membrilor echipei','Carisma liderului crește dependența membrilor echipei și îi împiedică pe aceștia să își urmeze propriile idei',' Liderul transformațional nu este de acord cu propunerea ideilor din partea adepților'];

  constructor() { }

  ngOnInit(): void {
    this.score=0;
    this.showResult = false;
  }

  onSubmit(){
    this.score=0;
    if(this.a1 === 'Personalitatea și viziunea liderului pot împiedica creativitatea la nivelul membrilor echipei')
      this.score += 1;
    if(this.a2 === 'Transformațional')
      this.score += 1;
    if(this.a3 === 'Distincția dintre generarea de idei și implementarea ideilor')
      this.score += 1;
    if(this.a4 === 'Pe măsură ce înaintează inovațiile către implementare')
      this.score += 1;
    if(this.a5 === 'Carisma liderului crește dependența membrilor echipei și îi împiedică pe aceștia să își urmeze propriile idei')
      this.score += 1;
    this.showResult = true;
  }

}
