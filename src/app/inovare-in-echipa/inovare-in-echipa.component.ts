import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inovare-in-echipa',
  templateUrl: './inovare-in-echipa.component.html',
  styleUrls: ['./inovare-in-echipa.component.css']
})
export class InovareInEchipaComponent implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  openVideo() {
    this.dialog.open(DialogVideo);
  }

  openResources(){
    this.router.navigate(['/inovare-resurse']);
  }

  openQuiz(){
    this.router.navigate(['/inovare-quiz']);
  }

}


@Component({
  selector: 'dialog-video',
  templateUrl: 'dialog-video.html',
})
export class DialogVideo {}
