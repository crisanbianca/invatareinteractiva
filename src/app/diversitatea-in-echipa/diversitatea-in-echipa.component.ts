import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diversitatea-in-echipa',
  templateUrl: './diversitatea-in-echipa.component.html',
  styleUrls: ['./diversitatea-in-echipa.component.css']
})
export class DiversitateaInEchipaComponent implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  openVideo() {
    this.dialog.open(DialogVideo);
  }

  openResources(){
    this.router.navigate(['/diversitate-resurse']);
  }

  openQuiz(){
    this.router.navigate(['/diversitate-quiz']);
  }
}

@Component({
  selector: 'dialog-video',
  templateUrl: 'dialog-video.html',
})
export class DialogVideo {}
