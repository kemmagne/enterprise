import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CanneauxCComponent } from '../../canneaux/canneaux-c/canneaux-c.component';


@Component({
  selector: 'app-canneaux-p',
  templateUrl: './canneaux-p.component.html',
  styleUrls: ['./canneaux-p.component.css']
})
export class CanneauxPComponent implements OnInit {

  
  constructor(
    private matDialog : MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(){

    this.matDialog.open(CanneauxCComponent, {
      width:'500px'
    })
  }

}
