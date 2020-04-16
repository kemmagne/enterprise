import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { MarchersCComponent } from '../../marcher/marchers-c/marchers-c.component';



@Component({
  selector: 'app-marchers-p',
  templateUrl: './marchers-p.component.html',
  styleUrls: ['./marchers-p.component.css']
})
export class MarchersPComponent implements OnInit {

  constructor(
    private matDialog : MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(){

    this.matDialog.open(MarchersCComponent, {
    
    })
  }

}
