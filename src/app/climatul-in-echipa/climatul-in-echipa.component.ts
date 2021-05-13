import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-climatul-in-echipa',
  templateUrl: './climatul-in-echipa.component.html',
  styleUrls: ['./climatul-in-echipa.component.css']
})
export class ClimatulInEchipaComponent implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  openVideo() {
    this.dialog.open(DialogVideo);
  }

  openResources(){
    this.router.navigate(['/climat-resurse']);
  }

  openQuiz(){
    this.router.navigate(['/climat-quiz']);
  }

}

@Component({
  selector: 'dialog-video',
  templateUrl: 'dialog-video.html',
})
export class DialogVideo {}
