import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liderul-echipei',
  templateUrl: './liderul-echipei.component.html',
  styleUrls: ['./liderul-echipei.component.css']
})
export class LiderulEchipeiComponent implements OnInit {


  constructor(public dialog: MatDialog,  private router:Router) { }

  ngOnInit(): void {
  }

  openVideo() {
    this.dialog.open(DialogVideo);
  }

  openResources(){
    this.router.navigate(['/lider-resurse']);
  }

  openQuiz(){
    this.router.navigate(['/lider-quiz']);
  }

}

@Component({
  selector: 'dialog-video',
  templateUrl: 'dialog-video.html',
})
export class DialogVideo {}
